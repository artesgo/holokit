<script lang="ts">
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-funky.css';
  export let language: string;
  export let code: string;
  $: _code = Prism.highlight(code, Prism.languages[language], language);
</script>

<pre><code>{@html _code}</code></pre>

<style>
  /* TODO: monospaced font not applying */
  pre code {
    font-family: 'Courier New', Courier, monospace;
  }
</style>