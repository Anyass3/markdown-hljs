import hljs from 'highlight.js/lib/common';
import svelte from './svelte-lang';
export { Highlight, highlightCode, setLang, getLang, getHljs, setHljs } from './utils';

import { setLang, setHljs } from './utils';

setHljs(hljs);

// just adding some aliases
const langs = [
  { language: 'javascript', aliases: ['js', 'cjs', 'mjs'] },
  { language: 'typescript', aliases: ['ts'] },
  { language: 'python', aliases: ['py'] },
  { language: 'xml', aliases: ['html'] },
  { language: 'markdown', aliases: ['md'] },
  { language: 'python-repl', aliases: ['py-repl'] },
  { language: 'rust', aliases: ['rs'] },
  { language: 'perl', aliases: ['pl'] },
  { language: 'kotlin', aliases: ['kl'] },
  { language: 'xml', aliases: ['html'] },
  { language: 'svelte', defineLanguage: svelte },
];

langs.forEach((lang) => {
  setLang(lang);
});
