export const runMethods = (funcs, md) => {
  return funcs.reduce((result, fn) => {
    return fn(result);
  }, md);
};

export const setupVariables = (md) => {
  const re = /\$(?<key>[A-Z]+)\s*\=\s*(?<value>(?:(?!\n).)+)/;
  while (true) {
    console.log('setupVariables', md);
    const match = md.match(re);
    if (!match) break;
    md = md.replace(match[0], '');
    const reVar = RegExp(`\\{\\$${match.groups.key}\\}`);
    while (true) {
      const matchVar = md.match(reVar);
      if (!matchVar) break;
      console.log(match[0], matchVar[0]);
      md = md.replace(matchVar[0], match.groups.value);
    }
  }
  return md;
};
