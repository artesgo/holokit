<script lang="ts">
	import type { AlignContent, AlignItems, JustifyContent } from "./flex";


  export let row = false;
  export let reverse = false;
  export let wrap = false;
  export let gap: string | number = 0;
  // justify content
  export let justifyContent: JustifyContent = 'unset';

  // align items
  export let alignItems: AlignItems = 'unset';

  // align content
  export let alignContent: AlignContent = 'unset';

  $: gap_ = `flex gap-${gap}`;
</script>

<section class={gap_}
  class:flex-row={row && !reverse}
  class:flex-col={!row && !reverse}
  class:flex-row-reverse={row && reverse}
  class:flex-col-reverse={!row && reverse}

  class:justify-start={justifyContent === 'start'}
  class:justify-between={justifyContent === 'between'}
  class:justify-around={justifyContent === 'around'}
  class:justify-evenly={justifyContent === 'evenly'}
  class:justify-end={justifyContent === 'end'}

  class:align-start={alignItems === 'start'}
  class:align-stretch={alignItems === 'stretch'}
  class:align-center={alignItems === 'center'}
  class:align-baseline={alignItems === 'baseline'}
  class:align-first-baseline={alignItems === 'firstBaseline'}
  class:alignlast-baseline={alignItems === 'lastBaseline'}
  class:align-end={alignItems === 'end'}

  class:content-start={alignContent === 'start'}
  class:content-stretch={alignContent === 'stretch'}
  class:content-center={alignContent === 'center'}
  class:content-between={alignContent === 'between'}
  class:content-around={alignContent === 'around'}
  class:content-end={alignContent === 'end'}
  class:wrap={wrap}
>
  <slot />
</section>