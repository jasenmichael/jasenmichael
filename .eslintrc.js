module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'nuxt/no-env-in-hooks': 'off',
    'max-len': [2, { code: 1500, tabWidth: 4, ignoreUrls: true }],
  },
}
