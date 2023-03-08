<script lang="ts">
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-tomorrow.css';

	// const imports: {[key: string]: () => Promise<typeof import("*.css")> } = {
	// 	void: (): Promise<typeof import("*.css")> => import('prismjs/themes/prism-funky.css'),
	// 	light: (): Promise<typeof import("*.css")> => import('prismjs/themes/prism-solarizedlight.css'),
	// 	tomorrow: (): Promise<typeof import("*.css")> => import('prismjs/themes/prism-tomorrow.css')
	// };
  export let language: string;
  export let code: string;
  // export let theme = 'void';
  $: _code = Prism.highlight(code, Prism.languages[language], language);
  // async function loadTheme() {
  //   await imports[theme]();
  // }
  // $: if (theme) {
  //   loadTheme();
  // }
</script>

<pre><code>{@html _code}</code></pre>

<style>
  /* TODO: monospaced font not applying */
  pre code {
    font-family: 'Courier New', Courier, monospace;
  }
</style>