This build on top of [marked](https://marked.js.org/) and [highlightjs](https://github.com/highlightjs/highlight.js)

So you markdown with code syntax highlighting
`version 0.1.0`

## installation

```bash
npm i markdown-hljs
```

cdn [link](https://cdn.jsdelivr.net/npm/markdown-hljs)

```html
<script src="https://cdn.jsdelivr.net/npm/markdown-hljs"></script>
```

[SVLETE REPL DEMO](https://svelte.dev/repl/700e245f3f4d4e07bc2302d2d2c87a2f?version=3.32.2)

[SVLETE REPL DEMO](https://svelte.dev/repl/054f7e5c4b234bc5961dedcc3eddd3a3?version=3.32.2) with
[liquidjs](https://github.com/harttle/liquidjs)

## Docs

- not that needed you just have to understand markdown
- for code syntax hightlighting you need to import a theme
  - from `highlight.js/scss/THEMENAME.scss` or `highlight.js/styles/THEMENAME.css` ---> THROUGH NPM NODE_MODULES
  - or [TRY CDN](https://github.com/highlightjs/highlight.js#cdn-hosted)
  - [CHECKOUT THE THEMES ](https://highlightjs.org/static/demo/)
- if you wanted to declare a variable:
  - $CAPS= any - they are not visible
  - eg: $NAME= MyName
  - can be access anywhere in the markdown as: {$NAME}
- by default it will be able to highlight 35 common languages including svelte

```python
["xml", "bash", "c", "cpp", "csharp", "css", "markdown", "diff", "ruby", "go", "ini", "java", "javascript", "json", "kotlin", "less", "lua", "makefile", "perl", "objectivec", "php", "php-template", "plaintext", "python", "python-repl", "r", "rust", "scss", "shell", "sql", "swift", "yaml", "typescript", "vbnet", "svelte"]
```

- get lang(s)
  ```javascript
  import { getLang} from 'markdown-hljs';
  getLang() // for a list of all language names
  getLang(languageAndOrAliases: Array<string> | string) // for a Language object
  ```
- if you want to add another language(s)

  ```javascript
  import customLang from './path-to-customLang'
  import xml from 'highlight.js/lib/languages/xml.js';

  import Markdown,{setLang} from 'markdown-hljs';

  setLang({language: 'xml', defineLangue: xml, aliases: ['html'] })

  setLang({language: 'customLang', defineLangue: customLang})

  result=Markdown(markdown string,error=false)
  // error is false by default;
  // meaning is if highlight language is not recognised throw or don't throw error

  ```

- add another language(s) but without defaults

  ```javascript
  import hljs from 'highlight.js/lib/core';

  import customLang from './path-to-customLang'
  import xml from 'highlight.js/lib/languages/xml.js';


  import Markdown from 'markdown-hljs';
  import {Highlight,setHljs,setLang} from 'markdown-hljs';

  setHljs(hljs)

  setLang({language:'xml', defineLangue: xml, alias: ['html']})

  setLang({language: 'customLang', defineLangue: customLang})

  result=Markdown(markdown string)

  ```

- markdown without code syntax highlight:

  ```javascript
  import {marked} from 'markdown-hljs';

  // marked is just the marked lib + variable support

  result=marked(markdown string)

  ```

- highlight code with defaults

  ```javascript
  import {Highlight, highlightCode} from 'markdown-hljs';

  result=Highlight(code string, languageAndOrAliases, error=false) // code in <pre><code>
  // error is false by default;

  OR

  result=highlightCode(code string, languageAndOrAliases, error=true) // only code str
  // error is true by default;

  //error: meaning is if highlight language is not recognised throw or don't throw error
  ```

  > for `languageAndOrAliases` we can pass in an Array or string in the form `js, cjs, javascript` or `['js','javacript']` or `'js'`
  > it will try to find the language by both languageName and aliases

  so in markdown you can also do

  \`\`\`js,javascript

  code..

  \`\`\`

## Get started

### clone repo

```bash
npm install
npm run build
```

then

```bash
cd tests/svelte
npm install
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

# markdown-hljs
