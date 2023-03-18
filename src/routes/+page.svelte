<script>
	import { Button, Title } from '$lib';
</script>

<svelte:head>
	<title>Holokit</title>
</svelte:head>

<Title id="heading" data-testid="testing">Holokit Components</Title>

<div>
	<Button type={'success'} size={'s'}>Welcome</Button>
	<Button type={'warning'} size={'s'}>To</Button>
	<Button type={'info'} size={'s'}>The</Button>
	<Button type={'danger'} size={'s'}>Holokit</Button>
	<Button type={'neutral'} size={'s'}>Library</Button>
</div>
