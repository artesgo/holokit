<script lang="ts">
	import Gradient from "./holo-gradient.svelte";
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