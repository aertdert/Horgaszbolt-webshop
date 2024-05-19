
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
    ],
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    rules: {
        // Add your rules here
    },
};
