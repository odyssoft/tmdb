module.exports = {
  printWidth: 80,
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  jsxSingleQuote: true,
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '',
    '^((./)|(../))(.*)$',
  ],
  importOrderSeparation: true,
  importOrderCaseSensitive: true,
  importOrderSortSpecifiers: true,
}
