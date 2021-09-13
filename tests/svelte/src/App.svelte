<script lang="ts">
  import './night-owl.css';
  // Import markdown-hljs conversion library
  import Markdown, { marked, highlightCode, getHljs, getLang } from 'markdown-hljs';

  // Declare a variable to store the markdown data

  let markdown =
    "$NAM=Anyass3\n### i declared a variable NAM => {$NAM}\n\nmy **[github profile](https://github.com/{$NAM})**\n\n```js\nlet wow='yahoo'\n```";
  $: markedDown = Markdown(markdown, false);
  window['langs'] = getLang;
  window['getHljs'] = getHljs;
</script>

<h1>Markdown with code syntax highlight Editor</h1>

<!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
<textarea bind:value={markdown} placeholder="Enter markdown here" />

{@html markedDown}

<style>
  textarea {
    box-sizing: border-box;
    display: block;
    width: 100%;
  }

  textarea {
    font-family: monospace, Roboto;
    height: 25%;
    border: none;
    margin: 0;
    padding: 1rem;
  }

  h1 {
    background: #e1e1e1;
    margin: 0px;
    padding: 0.8rem;
    font-size: 1.2rem;
  }

  :global(body) {
    padding: 0;
  }
  :global(blockquote) {
    border-left-color: #ccd1d8;
    border-right-color: #aab2bc;
  }
</style>
