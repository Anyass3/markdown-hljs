import { HLJSApi, LanguageFn, Language } from './hljs';
export declare const setHljs: (hljs: HLJSApi) => void;
export declare const getHljs: () => HLJSApi;
declare type setLangKwArgs = {
  language: string;
  aliases?: Array<string>;
  defineLanguage?: LanguageFn;
};
export declare function setLang({
  language,
  aliases,
  defineLanguage,
}: setLangKwArgs): Promise<void>;
export declare const getLang: (
  languageAndOrAlias: string | Array<string>,
  options?: { getMatch?: boolean; error?: boolean }
) => Language;
export declare const highlightCode: (
  code?: string,
  languageAndOrAlias?: string | Array<string>,
  error?: boolean
) => string;
export declare const Highlight: (source: string, error?: boolean) => string;
export {};
