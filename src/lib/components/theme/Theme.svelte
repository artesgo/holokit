<script lang="ts">
	import type { ITheme } from "./theme";

  export let override: ITheme = {};
  export let grow = false;
  export let stretch = false;
  export let full = false;
  export let padded = false;

  export let theme: 'light' | 'void' | string = 'light';
  let props: {bound: string, prop: keyof ITheme }[] = [
    { bound: '--color: ', prop: 'color' }, 
	  { bound: '--color-alt: ', prop: 'colorAlt' }, 
    { bound: '--background-color: ', prop: 'backgroundColor' }, 
    { bound: '--background-color-alt: ', prop: 'backgroundColorAlt' }, 
    { bound: '--font-size-s: ', prop: 'fontSizeS' }, 
    { bound: '--font-size-m: ', prop: 'fontSizeM' }, 
    { bound: '--font-size-l: ', prop: 'fontSizeL' }, 
    { bound: '--font-weight-s: ', prop: 'fontWeightS' }, 
    { bound: '--font-weight-m: ', prop: 'fontWeightM' }, 
    { bound: '--font-weight-l: ', prop: 'fontWeightL' }, 
    { bound: '--padding-h-s: ', prop: 'paddingHS' }, 
    { bound: '--padding-h-m: ', prop: 'paddingHM' }, 
    { bound: '--padding-h-l: ', prop: 'paddingHL' }, 
    { bound: '--padding-v-s: ', prop: 'paddingVS' }, 
    { bound: '--padding-v-m: ', prop: 'paddingVM' }, 
    { bound: '--padding-v-l: ', prop: 'paddingVL' }, 
    { bound: '--margin-h-s: ', prop: 'marginHS' }, 
    { bound: '--margin-h-m: ', prop: 'marginHM' }, 
    { bound: '--margin-h-l: ', prop: 'marginHL' }, 
    { bound: '--margin-v-s: ', prop: 'marginVS' }, 
    { bound: '--margin-v-m: ', prop: 'marginVM' }, 
    { bound: '--margin-v-l: ', prop: 'marginVL' }, 
    { bound: '--border: ', prop: 'border' }, 
    { bound: '--border-radius: ', prop: 'borderRadius' }, 
    { bound: '--border-color: ', prop: 'borderColor' }, 
    { bound: '--border-width-m: ', prop: 'borderWidthM' }, 
    { bound: '--border-width-l: ', prop: 'borderWidthL' }, 
    { bound: '--control-width: ', prop: 'controlWidth' }, 
    { bound: '--control-min-width: ', prop: 'controlMinWidth' }, 
    { bound: '--control-max-width: ', prop: 'controlMaxWidth' }, 
    { bound: '--control-border: ', prop: 'controlBorder' }, 
    { bound: '--control-border-radius: ', prop: 'controlBorderRadius' }, 
    { bound: '--control-border-color: ', prop: 'controlBorderColor' }, 
    { bound: '--outline-color: ', prop: 'outlineColor' }, 
    { bound: '--outline-offset: ', prop: 'outlineOffset' }, 
    { bound: '--transition: ', prop: 'transition' }, 
  ]

  $: light = theme === 'light';
  $: dark = theme === 'void';
  // get defined props from consumer
  $: style = JSON.stringify(props
    .filter(prop => override[prop.prop] !== undefined)
    .map(prop => prop.bound + override[prop.prop])
  ).slice(2, -2).replace(/","/g, ';');
</script>

<section {style} class="holo-theme" class:grow class:stretch class:full class:light class:dark class:padded>
  <slot />
</section>

<style lang="scss">
  section {
		color: var(--color);
		background-color: var(--background-color);
  }
	.grow {
		flex-grow: 1;
	}
  .stretch {
    min-height: 100%;
  }
  .full,
  .full.stretch {
    min-height: 100vh;
  }

  .padded {
    padding-left: var(--padding-h-m);
    padding-right: var(--padding-h-m);
    padding-top: var(--padding-v-m);
    padding-bottom: var(--padding-v-m);
  }
</style>