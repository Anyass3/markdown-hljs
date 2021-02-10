<script>
  // Import markdown conversion library
  import Markdown from 'markdown-hljs';

  // Declare a variable to store the markdown data

  let markdown = '';
  $: markedDown = Markdown(markdown);
</script>

<h1>Markdown Editor</h1>

<!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
<textarea bind:value={markdown} placeholder="Enter markdown here" />

{@html markedDown}
<!-- Convert the markdown to HTML and display it -->
<!-- <div class="preview">{preview}</div> -->

<!-- Make it look (slightly) nicer ;) -->
<style lang="scss" global>
  @import './night-owl.scss';
  textarea,
  .preview {
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

  .preview {
    height: 75%;
    padding: 2rem;
    border-top: solid 2px #888;
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
