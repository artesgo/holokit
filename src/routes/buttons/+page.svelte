<script>
	import { Button, Card, Title } from '$lib';
</script>

<svelte:head>
	<title>Holokit Button</title>
</svelte:head>

<Title id="heading">Button Component Demo</Title>

<Card>
	<div>
		<Button id={"hahaaa"} theme={'success'} size={'s'}>click</Button>
		<Button theme={'warning'} size={'s'}>click</Button>
		<Button theme={'info'} size={'s'}>click</Button>
		<Button theme={'danger'} size={'s'}>click</Button>
		<Button theme={'neutral'} size={'s'}>click</Button>
	</div>
	<div>
		<Button theme={'success'}>click</Button>
		<Button theme={'warning'}>click</Button>
		<Button theme={'info'}>click</Button>
		<Button theme={'danger'}>click</Button>
		<Button theme={'neutral'} width={'200px'}>click</Button>
	</div>
	<div>
		<Button theme={'success'} size={'l'} formaction={'?/alright'} type="submit">click</Button>
		<Button theme={'warning'} size={'l'}>click</Button>
		<Button theme={'info'} size={'l'}>click</Button>
		<Button theme={'danger'} size={'l'}>click</Button>
		<Button theme={'neutral'} size={'l'}>click</Button>
	</div>

	<div class="flex">
		<Button theme={'warning'} width={'50%'}>click</Button>
		<Button theme={'success'} width={'50%'}>click</Button>
	</div>
</Card>
