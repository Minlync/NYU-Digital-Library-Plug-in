module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        extends: 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended',
        plugins: 'react', 'prettier'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
