<script lang="ts">
	import '$lib/myth.scss';
	import '$lib/common.scss';
	import './global.scss';
	import { Link, Theme, Flex, Checkbox } from '$lib';
	import { setContext } from 'svelte';
	import { theme } from './store';
	setContext('theme', theme);
	let checked = false;
	$: if (checked) {
		$theme = 'light';
	} else {
		$theme = 'void';
	}
</script>

<Theme stretch="window" theme={$theme}>
	<header>
		<Flex row gap={2}>
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
				<!-- <Link underline={true} href={'/pattern'}>Pattern</Link> -->
			</ul>

			<Checkbox id="chk" bind:checked>Light</Checkbox>
		</Flex>
	</header>
	
	<main>
		<slot />
	</main>
	
	<footer />
</Theme>


<style>
	main,
	header,
	footer {
		width: 100%;
		max-width: 900px;
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
