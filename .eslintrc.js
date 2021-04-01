module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    // Possible Errors
    'no-console': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],

    // Stylistic Issues
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'brace-style': ['warn'],
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-trailing-spaces': ['warn'],
    'no-unneeded-ternary': ['warn'],
    'comma-spacing': ['warn'],
    'comma-style': ['warn'],
    'comma-dangle': ['warn'],
    'eol-last': ['warn'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'block-spacing': ['warn'],

    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
    curly: ['warn'],

    'react/prop-types': [
      1,
      {
        ignore: ['i18n'],
        customValidators: []
      }
    ]
  }
};
