This build on top of [marked](https://marked.js.org/) and [highlightjs](https://github.com/highlightjs/highlight.js)

So you markdown with code syntax highlighting

## installation
```bash
npm i markdown-hljs
```
cdn[link](https://cdn.jsdelivr.net/npm/markdown-hljs)
```html
<script src="https://cdn.jsdelivr.net/npm/markdown-hljs"></script>
```

[SVLETE REPL DEMO](https://svelte.dev/repl/700e245f3f4d4e07bc2302d2d2c87a2f?version=3.32.2)

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
- by default it will be able to highlight 36 common languages (atleast what I consider to be)
- you can see the langs defined by default in `src/highlight/defaults`
- if you want to add another language(s)

  ```javascript
  import customLang from './path-to-customLang'
  import xml from 'highlight.js/lib/languages/xml.js';

  import Markdown,{setHljs} from 'markdown-hljs';

  setLang({lang:'xml',fn:xml, alias: ['html']})

  setLang({lang:'customLang',fn:customLang})

  result=Markdown(markdown string)

  ```

- if you want to add another language(s) but without defaults

  ```javascript
  import hljs from 'highlight.js/lib/core';

  import customLang from './path-to-customLang'
  import xml from 'highlight.js/lib/languages/xml.js';


  import Markdown from 'markdown-hljs/marked';
  import {Highlight,setHljs,setLang} from 'markdown-hljs/highlight/utils';

  setHljs(hljs)

  setLang({lang:'xml',fn:xml, alias: ['html']})

  setLang({lang:'customLang',fn:customLang})

  result=Markdown(markdown string)

  ```

- if you only need markdown without code syntax highlight:

  ```javascript
  import Markdown from 'markdown-hljs/marked';

  result=Markdown(markdown string)

  ```

- if you only need to highlight code with defaults

  ```javascript
  import {Highlight,highlightCode} from 'markdown-hljs/highlight';

  result=Highlight(code string) // code in <pre><code>
  OR
  result=highlightCode(code string) // only code str

  ```

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
