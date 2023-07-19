<div class='fading-border'>
  <slot></slot>
</div>

<style>
  .fading-border {
    position: relative;
    background: linear-gradient(var(--deg), var(--color1), var(--color2));
    padding: var(--border-width);
    border-radius: var(--border-radius);
  }
</style>