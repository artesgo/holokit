<script>
  export let src = '';
  export let alt = '';
  export let height = 300;
  export let width = 300;
</script>

<div class="card" {...$$restProps} style="width: {width}px;">
  <img class="tail" role="presentation" {src} {alt} />

  <div class="original">
    <div class="image-clipper" style="height: {height}px;">
      <img class="original-img" {width} role="presentation" {src} {alt} />
    </div>
  </div>

  <div class="content">
    {#if $$slots.title}
      <slot name="title" />
    {/if}
    <p><slot /></p>
  </div>
</div>

<style>
  .card {
		border: var(--border);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
  }

  .original {
		background: var(--background-color-alt);
    position: relative;
  }

  .image-clipper {
    overflow: hidden;
    border-radius: 0 0 0 16px;
  }

  .tail {
    position: absolute;
    top: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  .content {
    position: relative;
		background: var(--background-color-alt);
    border-radius: 0 16px 0 0;
    padding: 0.5rem 1rem;
    padding-bottom: 2rem;
  }
</style>
