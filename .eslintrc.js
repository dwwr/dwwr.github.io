module.exports = {
  // Specifies the ESLint parser]
  parser: '@typescript-eslint/parser',

  rules: {
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off', // storybook conflict
    'import/no-extraneous-dependencies': 'off', // storybook conflict
    'react/jsx-one-expression-per-line': 'off', // prettier conflict
    'react/jsx-curly-newline': 'off', // prettier conflict
    'no-nested-ternary': 'off',
    'react/jsx-indent': 'off', //prettier conflict
    'react/no-array-index-key': 'off',
    'arrow-body-style': 'off',
  },

  extends: ['plugin:storybook/recommended']
}
