<script lang="ts">
	import type { ITheme } from "./theme";

  export let theme: ITheme;
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

  // get defined props from consumer
  $: style = JSON.stringify(props
    .filter(prop => theme[prop.prop] !== undefined)
    .map(prop => prop.bound + theme[prop.prop])
  ).slice(2, -2).replace('","', ';');
</script>

<section {style}>
  <slot />
</section>