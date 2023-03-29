<script lang="ts">
  export let alternate = false;
  export let index = 0;
</script>

<tr class="holo-row" class:alt={alternate && index % 2 === 0} >
  <slot />
</tr>

<style>
  .alt {
    background-color: var(--background-color-alt);
  }
</style>