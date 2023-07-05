<script>
	import Gradient from "./Gradient.svelte";

</script>

<Gradient>
  <div class='card'>
    <slot></slot>
  </div>
</Gradient>

<style>
  .card {
    background: var(--background-color);
    border-radius: var(--border-radius);
  }
</style>