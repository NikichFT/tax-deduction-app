module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "indent": "off",
        "no-multi-spaces": "off",
        "space-in-parens": "off",
        "space-before-function-paren": "off",
        "space-before-blocks": "off",
        "no-trailing-spaces": "off",
        "object-curly-spacing": "off",
        "no-multiple-empty-lines": "off",
        "comma-dangle": "off",
        "semi": "off",
        "comma-spacing": "off",
        "eol-last": "off",
    }
}