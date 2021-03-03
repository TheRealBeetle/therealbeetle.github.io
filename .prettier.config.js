module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false, //是否運用tab進行縮進,默認false.代表使用空格進行縮減
  singleQuote: true,
  semi: true,
  tailingComma: "es5",
  bracketSpacing: true,
  parser: "babylon", // babylon 是@Babel/parse 別稱,區分babel
  jsxSingleQuote: true,
  quoteProps: "as-needed",
  arrowParens: "avoid"
};
