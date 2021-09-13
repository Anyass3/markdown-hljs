export { default as marked } from './marked';
export * from './highlight';

import marked from './marked';
import { Highlight } from './highlight';

export default (markdown, error: boolean = false) => {
  const markedDown = marked(markdown);
  return Highlight(markedDown, error);
};
