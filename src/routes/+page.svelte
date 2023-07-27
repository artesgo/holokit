<script>
	import { Button, Title } from '$lib';
</script>

<svelte:head>
	<title>Holokit</title>
</svelte:head>

<Title id="heading" data-testid="testing">Holokit Components</Title>

<div>
	<Button theme={'success'} size={'s'}>Welcome</Button>
	<Button theme={'warning'} size={'s'}>To</Button>
	<Button theme={'info'} size={'s'}>The</Button>
	<Button theme={'danger'} size={'s'}>Holokit</Button>
	<Button theme={'neutral'} size={'s'}>Library</Button>
</div>

<div>
	<Button disabled theme={'success'} size={'s'}>Welcome</Button>
	<Button disabled theme={'warning'} size={'s'}>To</Button>
	<Button disabled theme={'info'} size={'s'}>The</Button>
	<Button disabled theme={'danger'} size={'s'}>Holokit</Button>
	<Button disabled theme={'neutral'} size={'s'}>Library</Button>
</div>
