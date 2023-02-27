<script lang="ts">
  export let href = '';
  export let target: string | undefined = undefined;
  export let underline = false;
</script>

<a 
  class="holo-link"
  class:holo-link-under={underline}
  {href} {target}
>
  <slot />
</a>

<style lang="scss">
  .holo-link {
    color: var(--color);
    text-decoration: none;
    &-under {
      text-decoration: underline;
    }
  }
</style>