module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    "function-paren-newline": [2, "multiline"],
    "indent": [2, 2],
    "jsx-quotes": [2, "prefer-double"],
    "keyword-spacing": 2,
    "no-console": 2,
    "no-floating-decimal": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1
      }
    ],
    "no-template-curly-in-string": 2,
    "no-trailing-spaces": 2,
    "no-var": 2,
    "object-curly-newline": [
      2,
      {
        "minProperties": 2,
        "multiline": true
      }
    ],
    "object-curly-spacing": [2, "always"],
    "object-property-newline": [
      2,
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "prefer-const": 2,
    "quotes": [2, "double"],
    "semi": [2, "always"],
    "semi-spacing": 2,
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2
  }
};
