<script lang="ts">
	import type { Stretch } from '../common';
	import type { ITheme } from './theme';

	export let override: ITheme = {};
	export let grow = false;
	export let stretch: Stretch = 'none';
	export let full = false;
	export let padded = false;

	export let theme: 'light' | 'void' | 'clear' | 'slate' | 'sapling' | string = 'light';
	let props: { bound: string; prop: keyof ITheme }[] = [
		{ bound: '--color: ', prop: 'color' },
		{ bound: '--color-alt: ', prop: 'colorAlt' },
		{ bound: '--background-color: ', prop: 'backgroundColor' },
		{ bound: '--background-color-alt: ', prop: 'backgroundColorAlt' },
		{ bound: '--background-color-modal: ', prop: 'backgroundColorModal' },
		{ bound: '--font-size-s: ', prop: 'fontSizeS' },
		{ bound: '--font-size-m: ', prop: 'fontSizeM' },
		{ bound: '--font-size-l: ', prop: 'fontSizeL' },
		{ bound: '--font-weight-s: ', prop: 'fontWeightS' },
		{ bound: '--font-weight-m: ', prop: 'fontWeightM' },
		{ bound: '--font-weight-l: ', prop: 'fontWeightL' },
		{ bound: '--padding-h-s: ', prop: 'paddingHS' },
		{ bound: '--padding-h-m: ', prop: 'paddingHM' },
		{ bound: '--padding-h-l: ', prop: 'paddingHL' },
		{ bound: '--padding-v-s: ', prop: 'paddingVS' },
		{ bound: '--padding-v-m: ', prop: 'paddingVM' },
		{ bound: '--padding-v-l: ', prop: 'paddingVL' },
		{ bound: '--margin-h-s: ', prop: 'marginHS' },
		{ bound: '--margin-h-m: ', prop: 'marginHM' },
		{ bound: '--margin-h-l: ', prop: 'marginHL' },
		{ bound: '--margin-v-s: ', prop: 'marginVS' },
		{ bound: '--margin-v-m: ', prop: 'marginVM' },
		{ bound: '--margin-v-l: ', prop: 'marginVL' },
		{ bound: '--border: ', prop: 'border' },
		{ bound: '--border-radius: ', prop: 'borderRadius' },
		{ bound: '--border-color: ', prop: 'borderColor' },
		{ bound: '--border-width-m: ', prop: 'borderWidthM' },
		{ bound: '--border-width-l: ', prop: 'borderWidthL' },
		{ bound: '--control-width: ', prop: 'controlWidth' },
		{ bound: '--control-min-width: ', prop: 'controlMinWidth' },
		{ bound: '--control-max-width: ', prop: 'controlMaxWidth' },
		{ bound: '--control-border: ', prop: 'controlBorder' },
		{ bound: '--control-border-radius: ', prop: 'controlBorderRadius' },
		{ bound: '--control-border-color: ', prop: 'controlBorderColor' },
		{ bound: '--outline-color: ', prop: 'outlineColor' },
		{ bound: '--outline-offset: ', prop: 'outlineOffset' },
		{ bound: '--transition: ', prop: 'transition' },
		// color themes
		{ bound: '--success: ', prop: 'success' },
		{ bound: '--success-lightest: ', prop: 'successLightest' },
		{ bound: '--success-lighter: ', prop: 'successLighter' },
		{ bound: '--success-darker: ', prop: 'successDarker' },
		{ bound: '--success-darkest: ', prop: 'successDarkest' },
		{ bound: '--info: ', prop: 'info' },
		{ bound: '--info-lightest: ', prop: 'infoLightest' },
		{ bound: '--info-lighter: ', prop: 'infoLighter' },
		{ bound: '--info-darker: ', prop: 'infoDarker' },
		{ bound: '--info-darkest: ', prop: 'infoDarkest' },
		{ bound: '--danger: ', prop: 'danger' },
		{ bound: '--danger-lightest: ', prop: 'dangerLightest' },
		{ bound: '--danger-lighter: ', prop: 'dangerLighter' },
		{ bound: '--danger-darker: ', prop: 'dangerDarker' },
		{ bound: '--danger-darkest: ', prop: 'dangerDarkest' },
		{ bound: '--warning: ', prop: 'warning' },
		{ bound: '--warning-lightest: ', prop: 'warningLightest' },
		{ bound: '--warning-lighter: ', prop: 'warningLighter' },
		{ bound: '--warning-darker: ', prop: 'warningDarker' },
		{ bound: '--warning-darkest: ', prop: 'warningDarkest' },
		{ bound: '--neutral: ', prop: 'neutral' },
		{ bound: '--neutral-lightest: ', prop: 'neutralLightest' },
		{ bound: '--neutral-lighter: ', prop: 'neutralLighter' },
		{ bound: '--neutral-darker: ', prop: 'neutralDarker' },
		{ bound: '--neutral-darkest: ', prop: 'neutralDarkest' }
	];

	$: light = theme === 'light';
	$: dark = theme === 'void';
	$: clear = theme === 'clear';
	$: slate = theme === 'slate';
	$: sapling = theme === 'sapling';
	// get defined props from consumer
	$: style = JSON.stringify(
		props
			.filter((prop) => override[prop.prop] !== undefined)
			.map((prop) => prop.bound + override[prop.prop])
	)
		.slice(2, -2)
		.replace(/","/g, ';');
</script>

<section
	class="holo-theme"
	class:grow
	class:full
	class:light
	class:dark
	class:clear
	class:slate
	class:sapling
	class:padded
	class:stretch-element={stretch === 'element'}
	class:stretch-window={stretch === 'window'}
	{style}
	{...$$restProps}
>
	<slot />
</section>

<style lang="scss">
	.holo-theme {
		color: var(--color);
		background-color: var(--background-color);
	}
	.grow {
		flex-grow: 1;
	}
	.padded {
		padding-left: var(--padding-h-m);
		padding-right: var(--padding-h-m);
		padding-top: var(--padding-v-m);
		padding-bottom: var(--padding-v-m);
	}
</style>
