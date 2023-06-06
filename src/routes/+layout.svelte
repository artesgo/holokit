<script lang="ts">
	import '$lib/myth.scss';
	import '$lib/common.scss';
	import './global.scss';

	import github from 'svelte-highlight/styles/github';
	import {
		Link,
		Theme,
		Flex,
		createFocusManager,
		Button,
		Grid,
		Dropdown,
		DropdownItem,
		createMediaManager,
		MediaMonitor
	} from '$lib';
	import { setContext } from 'svelte';
	import { theme } from './store';
	const focusManager = createFocusManager();
	const mediaManager = createMediaManager();
	setContext('theme', theme);
	setContext('focus', focusManager);
	setContext('media', mediaManager);
	let value: 'void' | 'clear' | 'light' = 'void';
	$: $theme = value;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<MediaMonitor />

<Theme stretch="window" theme={$theme} >
	<Grid rowTemplate="100px 1fr 100px">
		<header>
			<Flex row gap={2}>
				<div>
					<Button on:click={() => focusManager.focus('heading')}>Go To Main</Button>
				</div>
				<ul>
					<Link padded underline href={'/'}>Home</Link>
					<Link padded underline href={'/alert'}>Alerts</Link>
					<Link padded underline href={'/checkbox'}>Checkbox</Link>
					<Link padded underline href={'/grid'}>Grid</Link>
					<Link padded underline href={'/inputs'}>Input</Link>
					<Link padded underline href={'/modals'}>Modal</Link>
					<Link padded underline href={'/popover'}>Popover</Link>
					<Link padded underline href={'/radios'}>Radios</Link>
					<Link padded underline href={'/select'}>Select</Link>
					<Link padded underline href={'/slider'}>Slider</Link>
					<Link padded underline href={'/table'}>Table</Link>
					<Link padded underline href={'/theme'}>Theme</Link>
					<Link padded underline href={'/focus'}>Focus Management</Link>
				</ul>

				<Dropdown label="Theme" bind:value component={Button} triggerProps={{ width: '200px' }}>
					<DropdownItem
						component={Button}
						value="light"
						triggerProps={{ width: '200px', theme: 'info' }}
					>
						Light
					</DropdownItem>
					<!-- <DropdownItem component={Button} value='void' triggerProps={{ width: '200px', theme: 'warning' }}>
						Red
					</DropdownItem> -->
					<DropdownItem
						component={Button}
						value="clear"
						triggerProps={{ width: '200px', theme: 'danger' }}
					>
						Clear
					</DropdownItem>
					<DropdownItem
						component={Button}
						value="void"
						triggerProps={{ width: '200px', theme: 'neutral' }}
					>
						Dark
					</DropdownItem>
					<!-- <DropdownItem component={Button} on:click={() => $theme = 'clear'} triggerProps={{ width: '200px', theme: 'neutral' }}>
						Item 4
					</DropdownItem> -->
				</Dropdown>
			</Flex>
		</header>

		<main>
			<slot />
		</main>

		<footer />
	</Grid>
</Theme>

<style lang="scss">
	main,
	header,
	footer {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding-left: var(--padding-h-l);
		padding-right: var(--padding-h-l);
		color: var(--color);
		background-color: var(--background-color);
	}

	header {
		padding-top: var(--padding-v-l);
		padding-bottom: var(--padding-v-l);
	}
	@media print {
		header {
			display: none;
		}
	}
</style>
