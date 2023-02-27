<script>
	import {Button, Modal} from '$lib';
	let open = true;
	let open2 = false;
</script>

<div class='modal-demo'>
  <Button on:click={() => (open = !open)}>Open Modal</Button>
  <Button on:click={() => (open2 = !open2)}>Open Non-Esc Modal</Button>
  <Modal bind:open>
    <span slot="header">Modal Header</span>
    Modal Content
  </Modal>
  
  <Modal bind:open={open2} escapeable={false}>
    <span slot="header">Modal Header</span>
    Modal Content
    <div slot="footer" class="flex">
      <Button type="success" width={'100%'}>Click</Button>
      <Button type="info" width={'100%'}>Click</Button>
      <Button type="neutral" width={'100%'}>Click</Button>
    </div>
  </Modal>
</div>

<style>
  .modal-demo {
    /* Demo variable override method of updating child components */
    --modal-width: 750px;
  }
</style>