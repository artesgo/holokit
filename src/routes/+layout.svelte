<script lang="ts">
	import '$lib/myth.scss';
	import '$lib/common.scss';
	import './global.scss';

	import github from 'svelte-highlight/styles/github';
	import {
		Link,
		Theme,
		createFocusManager,
		Button,
		Grid,
		Dropdown,
		DropdownItem,
		createMediaManager,
		MediaMonitor,
		Card
	} from '$lib';
	import { setContext } from 'svelte';
	import { theme } from './store';
	const focusManager = createFocusManager();
	const mediaManager = createMediaManager();
	setContext('theme', theme);
	setContext('focus', focusManager);
	setContext('media', mediaManager);
	let value: 'void' | 'clear' | 'light' | 'slate' | 'sapling' = 'void';
	$: $theme = value;
	let focused = false;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<MediaMonitor />

<div class="fixed" class:focused>
	<Button on:click={() => focusManager.focus('heading')} on:focus={() => focused = true} on:blur={() => focused = false}>Go To Main</Button>
</div>

<Theme stretch="window" theme={$theme} class="mint pattern-dots-sm">
	<Grid columnTemplate="200px 1fr" stretch="window">
		<Card>
			<nav>
				<Dropdown label="Theme" bind:value component={Button} triggerProps={{ width: '200px' }}>
					<DropdownItem
						component={Button}
						value="light"
					>
						Light
					</DropdownItem>
					<!-- <DropdownItem component={Button} value='void' triggerProps={{ width: '200px', theme: 'warning' }}>
						Red
					</DropdownItem> -->
					<DropdownItem
						component={Button}
						value="clear"
					>
						Clear
					</DropdownItem>
					<DropdownItem
						component={Button}
						value="void"
					>
						Dark
					</DropdownItem>
					<DropdownItem
						component={Button}
						value="slate"
					>
						Slate
					</DropdownItem>
					<DropdownItem
						component={Button}
						value="sapling"
					>
						Sapling
					</DropdownItem>
				</Dropdown>
				<Link padded underline block href={'/'}>Home</Link>
				<Link padded underline block href={'/alert'}>Alerts</Link>
				<Link padded underline block href={'/checkbox'}>Checkbox</Link>
				<Link padded underline block href={'/gradient'}>Gradient</Link>
				<Link padded underline block href={'/grid'}>Grid</Link>
				<Link padded underline block href={'/card'}>Card</Link>
				<Link padded underline block href={'/inputs'}>Input</Link>
				<Link padded underline block href={'/modals'}>Modal</Link>
				<Link padded underline block href={'/picker'}>Picker</Link>
				<Link padded underline block href={'/popover'}>Popover</Link>
				<Link padded underline block href={'/radios'}>Radios</Link>
				<Link padded underline block href={'/select'}>Select</Link>
				<Link padded underline block href={'/slider'}>Slider</Link>
				<Link padded underline block href={'/table'}>Table</Link>
				<Link padded underline block href={'/theme'}>Theme</Link>
				<Link padded underline block href={'/focus'}>Focus Management</Link>
			</nav>
		</Card>
		<main>
			<slot />
		</main>
	</Grid>
</Theme>

<style lang="scss">
	main {
		width: 100%;
		margin: 0 auto;
		padding-left: var(--padding-h-l);
		padding-right: var(--padding-h-l);
		color: var(--color);
		background-color: var(--background-color);
	}

	main,
	nav {
		padding-top: 2rem;
	}

	.fixed {
		position: fixed;
		margin: 0 auto;
		opacity: 0.1;
		transition: 300ms;
		left: 50%;
	}

	.fixed.focused {
		opacity: 1;
	}
</style>
