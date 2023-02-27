<script lang="ts">
	import { fade } from 'svelte/transition';
  export let show: boolean = false;
  export let placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  export let offset = 5;
  let hostElement: HTMLElement;
  let popper: HTMLElement;
  let style = '';
  $: if (hostElement && popper) {
    const hostRect = hostElement.getBoundingClientRect();
    const popperRect = popper.getBoundingClientRect();
    let top, left;
    switch (placement) {
      case 'top':
        top = (hostRect.top - popperRect.height - offset) + 'px';
        left = hostRect.left + 'px';
        break;
      case 'bottom':
        top = (hostRect.top + hostRect.height + offset) + 'px';
        left = hostRect.left + 'px';
        break;
      case 'left':
        top = hostRect.top + 'px';
        left = (hostRect.left - popperRect.width - offset) + 'px';
        break;
      case 'right':
        top = hostRect.top + 'px';
        left = (hostRect.left + hostRect.width + offset) + 'px';
        break;
    }

    style = `left: ${left}; top: ${top};`;
  }
</script>

<div class="host" bind:this={hostElement}>
  <slot />
</div>

{#if show}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="overlay" on:click={() => show = false}></div>
  <div class="popover" {style} bind:this={popper} transition:fade={{duration: 100}}>
    <slot name="popover-content" />
    {placement}
  </div>
{/if}

<style>
  .host {
    position: relative;
    display: inline-block;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .popover {
    position: absolute;
    background-color: var(--primary-background);
    border: 1px solid lightgray;
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
</style>