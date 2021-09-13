This build on top of [marked](https://marked.js.org/) and [highlightjs](https://github.com/highlightjs/highlight.js)

So you markdown with code syntax highlighting

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
- by default it will be able to highlight 31 common languages to keep it lightweight somehow
- you can see the langs defined by default in `src/highlight/defaults`
- if you want to add another language(s)

  ```javascript
  import customLang from './path-to-customLang'
  import xml from 'highlight.js/lib/languages/xml.js';

  import Markdown,{setLang} from 'markdown-hljs';

  setLang({lang:'xml',fn:xml, alias: ['html']})

  setLang({lang:'customLang',fn:customLang})

  result=Markdown(markdown string,error=false)
  // error is false by default; 
  // meaning is if highlight language is not recognised throw or don't throw error

  ```

- if you want to add another language(s) but without defaults

  ```javascript
  import hljs from 'highlight.js/lib/core';

  import customLang from './path-to-customLang'
  import xml from 'highlight.js/lib/languages/xml.js';


  import Markdown from 'markdown-hljs';
  import {Highlight,setHljs,setLang} from 'markdown-hljs';

  setHljs(hljs)

  setLang({lang:'xml',fn:xml, alias: ['html']})

  setLang({lang:'customLang',fn:customLang})

  result=Markdown(markdown string)

  ```

- if you only need markdown without code syntax highlight:

  ```javascript
  import {marked} from 'markdown-hljs';
  
  // marked is just the marked lib + variable support

  result=marked(markdown string)

  ```

- if you only need to highlight code with defaults

  ```javascript
  import {Highlight,highlightCode} from 'markdown-hljs';

  result=Highlight(code string, language, error=true) // code in <pre><code>
  OR
  result=highlightCode(code string,language, error=true) // only code str
  
  // error is true by default; 
  // meaning is if highlight language is not recognised throw or don't throw error
  ```
> for `language` we can pass in an Array or string in the form `js,cjs,javascript`
 it will choose the first among the list that works
 
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
