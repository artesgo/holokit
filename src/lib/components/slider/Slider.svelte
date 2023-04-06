<script lang="ts">
	import Flex from '../flex/Flex.svelte';
	import Input from '../input/Input.svelte';
	import type { ISliderProps } from './slider.types';
  export let value: ISliderProps['value'] = 0;
  export let max: ISliderProps['max'] = 100;
  export let min: ISliderProps['min'] = 0;
  export let id: ISliderProps['id'];
	export let theme: ISliderProps['theme'] = 'success';
  export let input: ISliderProps['input'] = false;
  export let label: ISliderProps['label'];
  import { tweened } from 'svelte/motion';
  let left = tweened(value, { duration: 100 });
  $: style = `left: ${$left}%`;
  $: left.set(+value); // coerce number
  let focus = false;
</script>

<label class="holo-slider-container">
  <div>
    {#if input}
      <Input inline apart id={id + '-slider-text-input'} bind:value>
        {label}
      </Input>
    {:else}
      {label}
    {/if}
  </div>
  <Flex row alignItems="center">
    <div class="track-container">
      <input
        on:focus={() => focus = true}
        on:focus
        on:blur={() => focus = false}
        on:blur
        class:holo-success={theme === 'success'}
        class:holo-warning={theme === 'warning'}
        class:holo-info={theme === 'info'}
        class:holo-danger={theme === 'danger'}
        class:holo-neutral={theme === 'neutral'}
        type="range" {min} {max} bind:value class="holo-slider" {id}>
        
      <div class="track"></div>
      <div class="tracker-track">
        <div class="tracker" class:focus style={style}></div>
      </div>
    </div>
  </Flex>
</label>

<style>
  .holo-slider-container {
    width: 100%;
  }
  .holo-slider {
    cursor: pointer;
    z-index: 1;
    position: relative;
    top: 8px;
    opacity: 0;
  }
	.holo-success {
		background: var(--success);
  }
	.holo-warning {
    background: var(--warning);
  }
	.holo-info {
		background: var(--info);
  }
	.holo-danger {
		background: var(--danger);
  }
	.holo-neutral {
		background: var(--neutral);
  }
  .track-container {
    /* position: relative; */
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }
  .track {
    position: relative;
    height: 4px;
    top: -2px;
    background: var(--background-color-alt);
  }
  .tracker {
    position: relative;
    height: 16px;
    width: 16px;
    top: -12px;
    background: var(--color);
    border-radius: var(--border-radius);
    pointer-events: none;
  }
  .tracker.focus {
    outline: 1px solid var(--outline-color);
    outline-offset: var(--outline-offset);
  }
  .tracker-track {
    width: calc(100% - 16px);
  }
</style>