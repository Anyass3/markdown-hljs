export const runMethods = (funcs, md) => {
  return funcs.reduce((result, fn) => {
    return fn(result);
  }, md);
};

export const setupVariables = (md) => {
  const re = /\$(?<key>[A-Z]+)\s*\=\s*(?<value>(?:(?!\n).)+)/;
  const matches = md.match(RegExp(re, 'g'));
  if (matches)
    matches.forEach((match) => {
      md = md.replace(match, '');
      match = match.match(re);
      const reStr = `\\{\\$${match.groups.key}\\}`;
      const usages = md.match(RegExp(reStr, 'g'));
      if (usages)
        usages.forEach((matchVar) => {
          md = md.replace(matchVar, match.groups.value);
        });
    });
  return md;
};
