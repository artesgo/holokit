<script>
  import '$lib/myth.scss';
  import '$lib/common.scss';
  import './global.scss';
	import { Link } from '$lib';
</script>

<header>
  <ul>
    <Link href={"/"}>Buttons</Link>
    <Link href={"/inputs"}>Input</Link>
    <Link href={"/modals"}>Modal</Link>
  </ul>
</header>

<main>
  <slot />
</main>

<footer></footer>

<style>
  main, header, footer {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding-left: var(--padding-h-l);
    padding-right: var(--padding-h-l);
  }

  header {
    margin-top: var(--margin-v-l);
    margin-bottom: var(--margin-v-l);
  }
</style>