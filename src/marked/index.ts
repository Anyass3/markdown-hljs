import marked from 'marked';
import * as utils from './utils';

const { runMethods, setupVariables, ...methods } = utils;

export default (markdown) => {
  markdown = setupVariables(markdown);
  markdown = marked(markdown);
  markdown = runMethods(Object.values(methods), markdown);
  return markdown;
};
