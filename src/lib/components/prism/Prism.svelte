<script lang="ts">
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-funky.css';
  export let language: string;
  export let code: string;
  $: _code = Prism.highlight(code, Prism.languages.html, language);
</script>

<pre><code>{@html _code}</code></pre>
