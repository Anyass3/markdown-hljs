// import hljs from './hljs';

let hljs;

const languages = [];

export const setHljs = (hl) => {
  hljs = hl;
};

export const getHljs = () => {
  return hljs;
};

function decodeHTML(code) {
  var doc = new DOMParser().parseFromString(code, 'text/html');
  return doc.documentElement.textContent;
}

export async function setLang({ lang = '', alias = [], fn }) {
  if (fn && typeof hljs !== 'undefined') {
    hljs.registerLanguage(lang, fn);
  }
  languages.push({ 0: lang, alias });
}

export const getLang = (lang) => {
  for (let language of languages) {
    if (language[0] === lang || language.alias.includes(lang)) return language[0];
  }
  return lang;
};

export const highlightCode = (lang, code) => {
  lang = getLang(lang);
  try {
    let highlighted = '';
    for (let lineOfCode of code.split('\n'))
      highlighted += hljs.highlight(lang, lineOfCode).value + '<br>';
    return highlighted;
  } catch (e) {
    console.error(e);
    return code;
  }
};

export const Highlight = (source) => {
  let reNoLang = /<pre><code>(?<code>(?:(?!<\/code><\/pre>).[\n\t]*)+)<\/code><\/pre>/;
  let reWithLang = /<pre><code class=['"]language-(?<lang>[a-z]+)['"]>(?<code>(?:(?!<\/code><\/pre>).[\n\t]*)+)<\/code><\/pre>/;
  let prev_code = '',
    prev_lang = '';
  while (true) {
    const result = source.match(reNoLang) || source.match(reWithLang);
    if (!result) break;
    const code = decodeHTML(result.groups.code);
    const lang = result.groups.lang;
    if (prev_code === code && prev_lang === lang) break;
    prev_code = code;
    prev_lang = lang;

    const highlightedCode = highlightCode(lang, code);
    if (lang)
      source = source.replace(
        result[0],
        `<pre><code class='hljs ${lang}'>${highlightedCode}</pre></code>`
      );
    else
      source = source.replace(result[0], `<pre><code class='hljs'>${highlightedCode}</pre></code>`);
  }
  return source;
};
