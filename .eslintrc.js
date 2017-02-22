// http://eslint.org/docs/user-guide/configuring

module.exports = {
  globals: {
    require: true,
    Promise: true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    // 'import/extensions': ['error', 'always', {
    //   'js': 'never',
    //   'vue': 'off'
    // }],

    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'always'], // 必须使用 ';' 号结尾
    'one-var': ['error', 'never'],
    'comma-dangle': ['error', { // 结尾逗号 ','
      'arrays': 'only-multiline',
      'objects': 'only-multiline', // 多行结尾 必须加 ','
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }]
  }
};
