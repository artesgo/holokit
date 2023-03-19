<script lang="ts">
	import '$lib/myth.scss';
	import '$lib/common.scss';
	import './global.scss';
	import { Link, Theme, Flex, createFocusManager, Button, Grid, Dropdown, DropdownItem } from '$lib';
	import { setContext } from 'svelte';
	import { theme } from './store';
	let focusManager = createFocusManager();
	setContext('theme', theme);
	setContext('focus', focusManager);
</script>

<Theme stretch="window" theme={$theme}
	class="mint pattern-dots-sm">
	<Grid rowTemplate="100px 1fr 100px">
		<header>
			<Flex row gap={2}>
				<Button on:click={() => focusManager.focus('heading')}>Go To Main</Button>
				<ul>
					<Link underline={true} href={'/'}>Home</Link>
					<Link underline={true} href={'/alert'}>Alerts</Link>
					<Link underline={true} href={'/buttons'}>Buttons</Link>
					<Link underline={true} href={'/checkbox'}>Checkbox</Link>
					<Link underline={true} href={'/grid'}>Grid</Link>
					<Link underline={true} href={'/inputs'}>Input</Link>
					<Link underline={true} href={'/modals'}>Modal</Link>
					<Link underline={true} href={'/popover'}>Popover</Link>
					<Link underline={true} href={'/radios'}>Radios</Link>
					<Link underline={true} href={'/select'}>Select</Link>
					<Link underline={true} href={'/table'}>Table</Link>
					<Link underline={true} href={'/theme'}>Theme</Link>
	
					<Link underline={true} href={'/focus'}>Focus Management</Link>
					<!-- <Link underline={true} href={'/pattern'}>Pattern</Link> -->
				</ul>
	
				<Dropdown component={Button} triggerProps={{ width: '200px' }}>
					<DropdownItem component={Button} on:click={() => $theme = 'light'} triggerProps={{ width: '200px', type: 'info' }}>
						Light
					</DropdownItem>
					<!-- <DropdownItem component={Button} on:click={() => $theme = 'void'} triggerProps={{ width: '200px', type: 'warning' }}>
						Red
					</DropdownItem> -->
					<DropdownItem component={Button} on:click={() => $theme = 'clear'} triggerProps={{ width: '200px', type: 'danger' }}>
						Clear
					</DropdownItem>
					<DropdownItem component={Button} on:click={() => $theme = 'void'} triggerProps={{ width: '200px', type: 'neutral' }}>
						Dark
					</DropdownItem>
					<!-- <DropdownItem component={Button} on:click={() => $theme = 'clear'} triggerProps={{ width: '200px', type: 'neutral' }}>
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

<style lang='scss'>
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
