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

<Theme stretch="window" theme={$theme} class="mint pattern-dots-sm">
	<Grid rowTemplate="100px 1fr 100px">
		<header>
			<Flex row gap={2}>
				<Button on:click={() => focusManager.focus('heading')}>Go To Main</Button>
				<ul>
					<Link underline href={'/'}>Home</Link>
					<Link underline href={'/alert'}>Alerts</Link>
					<Link underline href={'/checkbox'}>Checkbox</Link>
					<Link underline href={'/grid'}>Grid</Link>
					<Link underline href={'/inputs'}>Input</Link>
					<Link underline href={'/modals'}>Modal</Link>
					<Link underline href={'/popover'}>Popover</Link>
					<Link underline href={'/radios'}>Radios</Link>
					<Link underline href={'/select'}>Select</Link>
					<Link underline href={'/slider'}>Slider</Link>
					<Link underline href={'/table'}>Table</Link>
					<Link underline href={'/theme'}>Theme</Link>
					<Link underline href={'/focus'}>Focus Management</Link>
					<!-- <Link underline href={'/pattern'}>Pattern</Link> -->
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
</style>
