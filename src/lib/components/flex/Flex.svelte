<script lang="ts">
  export let row = false;
  export let reverse = false;
  export let wrap = false;
  // justify content
  export let justifyStart = false;
  export let justifyBetween = false;
  export let justifyAround = false;
  export let justifyEvenly = false;
  export let justifyEnd = false;

  // align items
  export let alignStart = false;
  export let alignStretch = false;
  export let alignCenter = false;
  export let alignBaseline = false;
  export let alignFirstBaseline = false;
  export let alignLastBaseline = false;
  export let alignEnd = false;

  // align content
  export let contentStart = false;
  export let contentStretch = false;
  export let contentCenter = false;
  export let contentBetween = false;
  export let contentAround = false;
  export let contentEnd = false;
</script>

<section class="flex"
  class:flex-row={row && !reverse}
  class:flex-col={!row && !reverse}
  class:flex-row-reverse={row && reverse}
  class:flex-col-reverse={!row && reverse}
  class:justify-start={justifyStart}
  class:justify-between={justifyBetween}
  class:justify-around={justifyAround}
  class:justify-evenly={justifyEvenly}
  class:justify-end={justifyEnd}
  class:align-start={alignStart}
  class:align-stretch={alignStretch}
  class:align-center={alignCenter}
  class:align-baseline={alignBaseline}
  class:align-first-baseline={alignFirstBaseline}
  class:alignlast-baseline={alignLastBaseline}
  class:align-end={alignEnd}
  class:content-start={contentStart}
  class:content-stretch={contentStretch}
  class:content-center={contentCenter}
  class:content-between={contentBetween}
  class:content-around={contentAround}
  class:content-end={contentEnd}
  class:wrap={wrap}
>
  <slot />
</section>