import type { HLJSApi, Language, LanguageFn } from 'highlight.js';
let hljs: HLJSApi;

export const setHljs = (hl: HLJSApi) => {
  hljs = hl;
};

export const getHljs = () => {
  return hljs;
};

function decodeHTML(code: string) {
  var doc = new DOMParser().parseFromString(code, 'text/html');
  return doc.documentElement.textContent;
}
type setLangKwArgs = {
  language: string;
  aliases?: Array<string>;
  defineLanguage?: LanguageFn;
};

export async function setLang({ language, aliases = [], defineLanguage }: setLangKwArgs) {
  if (hljs && language) {
    if (defineLanguage) hljs.registerLanguage(language, defineLanguage);
    hljs.registerAliases(aliases, { languageName: language });
  }
}

export const getLang = (
  languageAndOrAliases: string | Array<string>,
  { getMatch = false, error = false } = {}
) => {
  if (hljs) {
    if (typeof languageAndOrAliases === undefined) return hljs.listLanguages();
    let match;
    let language: Language;

    if (typeof languageAndOrAliases === 'string')
      languageAndOrAliases = languageAndOrAliases
        .split(',')
        .filter((lang) => lang)
        .map((lang) => lang.trim());

    for (let lang of languageAndOrAliases) {
      language = hljs.getLanguage(lang);
      match = lang;
      if (language) break;
    }

    if (error && !language) throw Error(`Unknown language(s) ${languageAndOrAliases.join(', ')}`);
    return getMatch && language ? match : language;
  }
};

export const highlightCode = (
  code: string = '',
  languageAndOrAliases: string | Array<string> = '',
  error: boolean = true
) => {
  const language = getLang(languageAndOrAliases, { error, getMatch: true }) as string;
  if (!language) return code;
  let highlighted = '';
  for (let lineOfCode of code.split('\n'))
    highlighted += hljs.highlight(lineOfCode, { language }).value + '<br>';
  return highlighted;
};

export const Highlight = (source, error?: boolean) => {
  // let reNoLang = /<code>(?<code>(?:(?!<\/code>).[\n\t]*)+)<\/code>/;
  // console.log({ error });
  let reWithLang =
    /<pre><code( class=['"]language-(?<lang>[a-z,]+)['"])?>(?<code>(?:(?!<\/code><\/pre>).[\n\t]*)+)<\/code><\/pre>/;
  let prev_code = '',
    prev_lang = '';
  while (true) {
    const result = source.match(reWithLang);
    if (!result) break;
    const code = decodeHTML(result.groups.code);
    const lang = result.groups.lang;
    if (prev_code === code && prev_lang === lang) break;
    prev_code = code;
    prev_lang = lang;

    const highlightedCode = highlightCode(code, lang, error);
    if (lang)
      source = source.replace(
        result[0],
        `<pre><code class='hljs ${lang}'>${highlightedCode}</code></pre>`
      );
    else
      source = source.replace(result[0], `<pre><code class='hljs'>${highlightedCode}</code></pre>`);
  }
  return source;
};
