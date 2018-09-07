module.exports = {
    'extends': 'airbnb',
    'env': {
        'browser': true,
        'es6': true
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'parser': 'babel-eslint',
    'plugins': [
        'react',
    ],
    'rules': {
        'indent': [
            'error',
            'tab'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-multi-spaces': 0,
        'no-tabs': 0,
        'react/sort-comp': 0,
        'react/jsx-filename-extension': 0,
        'func-names': 0,
        'arrow-body-style': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.md'] }],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'prefer-destructuring': 0,
        'no-param-reassign': 0,
        'no-return-assign': 0,
        'max-len': 0,
        'consistent-return': 0,
        'no-redeclare': 0,
        'react/require-extension': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/no-danger': 0,
        "comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "only-multiline",
            "exports": "only-multiline",
            "functions": "only-multiline"
        }],
        'function-paren-newline': 0,
        'object-curly-newline': 0,
        'no-restricted-globals': 0,
        "global-require": 0,
        'react/destructuring-assignment': 0,
    }
};