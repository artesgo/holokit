<script>
	import { Button, Title, gfade, gfly, gblur, gscale } from '$lib';
	let show = true;
	function toggle() {
		show = !show;
	}
</script>

<svelte:head>
	<title>Holokit</title>
</svelte:head>

<Title id="heading" data-testid="testing">Holokit Components</Title>

<div class="flex">
	<Button on:click={toggle} theme={'success'} size={'s'}>Welcome</Button>
	<Button on:click={toggle} theme={'warning'} size={'s'}>To</Button>
	<Button on:click={toggle} theme={'info'} size={'s'}>The</Button>
	<Button on:click={toggle} theme={'danger'} size={'s'}>Holokit</Button>
	<Button on:click={toggle} theme={'neutral'} size={'s'}>Library</Button>
</div>

{#if show}
	<div transition:gfade={{ ease: 'none', duration: 1000}}>
		<Button disabled theme={'success'} size={'s'}>Welcome</Button>
		<Button disabled theme={'warning'} size={'s'}>To</Button>
		<Button disabled theme={'info'} size={'s'}>The</Button>
		<Button disabled theme={'danger'} size={'s'}>Holokit</Button>
		<Button disabled theme={'neutral'} size={'s'}>Library</Button>
	</div>
{/if}
<div class="flex">
	<Button on:click={toggle} theme={'success'} size={'s'}>Welcome</Button>
	<Button on:click={toggle} theme={'warning'} size={'s'}>To</Button>
	<Button on:click={toggle} theme={'info'} size={'s'}>The</Button>
	<Button on:click={toggle} theme={'danger'} size={'s'}>Holokit</Button>
	<Button on:click={toggle} theme={'neutral'} size={'s'}>Library</Button>
</div>
{#if show}
	<div class="flex" transition:gblur={{ duration: 1000, blur: '2px' }}>
		<Button disabled theme={'success'} size={'s'}>Welcome</Button>
		<Button disabled theme={'warning'} size={'s'}>To</Button>
		<Button disabled theme={'info'} size={'s'}>The</Button>
		<Button disabled theme={'danger'} size={'s'}>Holokit</Button>
		<Button disabled theme={'neutral'} size={'s'}>Library</Button>
	</div>
{/if}
<div class="flex">
	<Button on:click={toggle} theme={'success'} size={'s'}>Welcome</Button>
	<Button on:click={toggle} theme={'warning'} size={'s'}>To</Button>
	<Button on:click={toggle} theme={'info'} size={'s'}>The</Button>
	<Button on:click={toggle} theme={'danger'} size={'s'}>Holokit</Button>
	<Button on:click={toggle} theme={'neutral'} size={'s'}>Library</Button>
</div>

<style>
	.flex {
		display: flex;
		flex-wrap: no-wrap;
		gap: 4px;
	}
</style>