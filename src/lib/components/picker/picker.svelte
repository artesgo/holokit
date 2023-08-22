<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { cubicInOut, linear } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	import Theme from '../theme/Theme.svelte';
	import { Input } from '../input';
	import Flex from '../flex/Flex.svelte';
	import Slider from '../slider/Slider.svelte';
	import type { IPickerProps } from './picker.types';
	import { gfly } from '$lib/transitions';

	let dispatch = createEventDispatcher();
	export let red: IPickerProps['red'] = 0;
	export let green: IPickerProps['green'] = 0;
	export let blue: IPickerProps['blue'] = 0;
	export let shade: IPickerProps['shade'] = 0;
	export let tint: IPickerProps['tint'] = 0;
	export let hue: IPickerProps['hue'] = 0;
	export let opacity: IPickerProps['opacity'] = 255;
	let showPicker = false;

	const indicatorCoord = tweened({
		x: 0,
		y: 0
	});

	onMount(() => {
		setTimeout(() => {
			// move initial coordinate set to after onMount tick to get the hydrated component values
			indicatorCoord.set({
				x: tint - 6,
				y: shade - 6
			});
		});
	});

	let mousedown = false;

	function setColor(x: number, y: number) {
		indicatorCoord.set(
			{
				x,
				y
			},
			{
				duration: 150,
				easing: cubicInOut
			}
		);
		shade = y + 6;
		tint = x + 6;
	}

	function keepTracking(event: MouseEvent) {
		if (mousedown) {
			const box = document.getElementById('color-picker')?.getBoundingClientRect();
			const limit = {
				x: {
					low: box!.left,
					high: box!.left + 255
				},
				y: {
					low: box!.top,
					high: box!.top + 255
				}
			};
			indicatorCoord.set(
				{
					x: clamp(0, 255, event.pageX - limit.x.low) - 6,
					y: clamp(0, 255, event.pageY - limit.y.low) - 6
				},
				{
					duration: 0,
					easing: linear
				}
			);
			setColor($indicatorCoord.x, $indicatorCoord.y);
		}
	}

	function keepTrackingTouch(event: TouchEvent) {
		if (mousedown) {
			// console.log(event);
		}
	}

	function clamp(min: number, max: number, value: number) {
		return Math.floor(Math.min(Math.max(value, min), max));
	}

	function mouseDown() {
		mousedown = true;
	}

	function mouseUp() {
		mousedown = false;
	}

	// converts 0 to 512 from slider to hex
	function convertRangeToHex(color: number) {
		// Calculate the color components

		if (color <= 128) {
			// red constant, green adjusted for shade of orange to yellow
			red = 255;
			green = Math.floor((color / 128) * 255);
			blue = 0;
		} else if (color <= 192) {
			// under 192, we're decreasing red to get from yellow to lime, to green
			// 192 - color is for decreasing the red component
			red = Math.floor(((192 - color) / 64) * 255);
			green = 255;
			blue = 0;
		} else if (color <= 256) {
			// then we're working with blue to work towards cyan
			red = 0;
			green = 255;
			// color - 192 is increasing the blue component
			blue = Math.floor(((color - 192) / 64) * 255);
		} else if (color <= 320) {
			// 320 is blue
			red = 0;
			// decreasing the green component
			green = Math.floor(((320 - color) / 64) * 255);
			blue = 255;
		} else if (color <= 448) {
			// 62.5% to 87.5% => 128 range
			// increasing the red component
			red = Math.floor(((color - 320) / 128) * 255);
			green = 0;
			blue = 255;
		} else {
			// 12.5% => 64 range
			red = 255;
			green = 0;
			// decreasing the blue component
			blue = Math.floor(((512 - color) / 64) * 255);
		}

		// Convert the color components to hexadecimal
		var redHex = base10ToHex(red);
		var greenHex = base10ToHex(green);
		var blueHex = base10ToHex(blue);
		// Create the hexadecimal color string
		const hex = '#' + redHex + greenHex + blueHex;
		return hex;
	}

	function base10ToHex(base10: number) {
		return base10.toString(16).padStart(2, '0');
	}

	function hexToBase10(hex: string) {
		return Number.parseInt(hex, 16);
	}

	// the more white, the more the numbers scale to 255
	// retrieved from the x coordinate of color picker
	function applyTint(source: number, _tint: number) {
		// get the difference between source and white;
		const percentage = _tint / 255;
		const rangeToWhite = 255 - source;
		return 255 - Math.floor(rangeToWhite * percentage);
	}

	// the more black, the more the return scales towards 0
	// retrieved from the y coordinate of the color picker
	function applyShade(source: number, _shade: number) {
		const amtOfBlack = 255 - _shade;
		const percentage = amtOfBlack / 255;
		return Math.floor(source * percentage);
	}

	function calculatedHex(r: number, g: number, b: number, _tint: number, _shade: number) {
		let redComp = applyTint(r, _tint);
		let greenComp = applyTint(g, _tint);
		let blueComp = applyTint(b, _tint);
		redComp = applyShade(redComp, _shade);
		greenComp = applyShade(greenComp, _shade);
		blueComp = applyShade(blueComp, _shade);
		let _hex = '#' + base10ToHex(redComp) + base10ToHex(greenComp) + base10ToHex(blueComp);
		dispatch('color', {
			hex: _hex + (opacityHex === 'ff' ? '' : opacityHex),
			components: { red, green, blue, opacity, tint, shade, hue }
		});
		return _hex;
	}

	// 8 color from the fully saturated colors
	$: saturatedHex = convertRangeToHex(hue);
	$: gradient = 'background-image: linear-gradient(90deg, white 0%, ' + saturatedHex + ' 100%);';
	$: opacityGradient =
		'background-image: linear-gradient(90deg, ' +
		saturatedHex +
		'00 0%, ' +
		saturatedHex +
		' 100%);';
	$: opacityHex = base10ToHex(opacity);
	$: hex = calculatedHex(red, green, blue, tint, shade) + (opacityHex === 'ff' ? '' : opacityHex);
	$: indicatorStyles = 'left: ' + $indicatorCoord.x + 'px; top: ' + $indicatorCoord.y + 'px;';
</script>

<Theme theme="clear" override={{ successLightest: hex, color: hex }}>
	<section class="relative">
		<Input id="hex" bind:value={hex} readonly on:click={() => (showPicker = !showPicker)}
			>Note Colour</Input
		>
		<div class="absolute inverse-font-color">{hex}</div>
	</section>
</Theme>
<button class="sr-only" on:click|stopPropagation={() => (showPicker = !showPicker)}> { showPicker ? 'Hide' : 'Open'} Color Picker </button>

<svelte:body on:mouseup={mouseUp} on:touchend={mouseUp} on:mousemove={keepTracking} />

{#if showPicker}
	<section transition:gfly={{ y: 99 }}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<Flex gap={2} row justifyContent="around">
			<div class="picker outer relative no-selection">
				<!-- click around the box to pick -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					id="color-picker"
					class="picker inner no-selection absolute"
					on:click={(event) => setColor(event.offsetX, event.offsetY)}
					on:mousedown={mouseDown}
					on:touchstart={mouseDown}
					on:focus
					on:blur
					style={gradient}
				/>
				<div class="indicator no-selection absolute" style={indicatorStyles} />
				<div class="ring no-selection" style={indicatorStyles} />
			</div>
		</Flex>

		<section class="gradient-container relative">
			<Slider id="picker" bind:value={hue} label="Color Picker" min={0} max={512} />
			<section class="saturated-gradient gradient absolute" />
		</section>

		<section class="gradient-container relative">
			<Slider id="opacity" bind:value={opacity} label="Color Opacity" min={0} max={255} />
			<section class="gradient absolute" style={opacityGradient} />
		</section>
	</section>
{/if}

<style>
	#color-picker {
		touch-action: none;
	}

	div.picker {
		width: 255px;
		height: 255px;
		box-sizing: border-box;
	}

	.relative {
		position: relative;
	}

	.absolute {
		position: absolute;
	}

	.inverse-font-color {
		color: white;
		z-index: 10;
		right: 10px;
		top: 50%;
		pointer-events: none;
	}

	.no-selection {
		user-select: none;
	}

	.indicator {
		border-radius: 50%;
		border: 2px solid black;
		height: 12px;
		width: 12px;
		box-shadow: 0px 0px 4px white;
	}

	.outer {
		border: 1px solid;
		background-image: linear-gradient(180deg, white 0%, black 100%);
		border-radius: 4px;
	}

	.inner {
		z-index: 1;
		mix-blend-mode: multiply;
		top: -1px;
		left: -1px;
		border-radius: 4px;
	}

	.gradient-container {
		z-index: 5;
	}

	.saturated-gradient {
		background-image: linear-gradient(
			90deg,
			#ff0000 0%,
			#ffff00 25%,
			#00ff00 37.5%,
			#00ffff 50%,
			#0000ff 62.5%,
			#ff00ff 87.5%,
			#ff0000 100%
		);
	}

	.gradient {
		bottom: 10px;
		height: 10px;
		width: 100%;
		z-index: -1;
	}
</style>
