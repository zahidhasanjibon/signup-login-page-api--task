module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'no-console': 0,
        'react/button-has-type': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'no-alert': 0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    }
};
