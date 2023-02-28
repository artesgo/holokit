<script>
	import { Button, Card } from "$lib";
</script>

<h1>Buttons</h1>

<Card>
  <div>
    <Button type={'success'} size={'s'}>click</Button>
    <Button type={'warning'} size={'s'}>click</Button>
    <Button type={'info'} size={'s'}>click</Button>
    <Button type={'danger'} size={'s'}>click</Button>
    <Button type={'neutral'} size={'s'}>click</Button>
  </div>
  <div>
    <Button type={'success'}>click</Button>
    <Button type={'warning'}>click</Button>
    <Button type={'info'}>click</Button>
    <Button type={'danger'}>click</Button>
    <Button type={'neutral'} width={'200px'}>click</Button>
  </div>
  <div>
    <Button type={'success'} size={'l'}>click</Button>
    <Button type={'warning'} size={'l'}>click</Button>
    <Button type={'info'} size={'l'}>click</Button>
    <Button type={'danger'} size={'l'}>click</Button>
    <Button type={'neutral'} size={'l'}>click</Button>
  </div>

  <div class="flex">
    <Button type={'warning'} width={'50%'}>click</Button>
    <Button type={'success'} width={'50%'}>click</Button>
  </div>
</Card>
