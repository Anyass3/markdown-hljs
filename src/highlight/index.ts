import hljs from './default';
import svelte from './svelte-lang';
export { Highlight, highlightCode, setLang, getLang, getHljs, setHljs } from './utils';

import { setLang, setHljs } from './utils';

setHljs(hljs);

const langs = [
  { lang: 'javascript', alias: ['js'] },
  { lang: 'typescript', alias: ['ts'] },
  { lang: 'bash', alias: ['sh'] },
  { lang: 'python', alias: ['py'] },
  { lang: 'xml', alias: ['html'] },
  { lang: 'django', alias: ['flask'] },
  { lang: 'svelte', fn: svelte },
];

langs.forEach((lang: any) => {
  setLang(lang);
});
