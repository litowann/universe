module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "prettier"],
    rules: {
        "react-refresh/only-export-components": ["error", { allowConstantExport: true }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "error",
        "no-unused-vars": ["off"],
        "no-alert": "error",
        "no-empty-function": "error",
        "no-magic-numbers": ["off", { ignore: [0, 1, -1] }],
        "no-debugger": "error",
        "comma-dangle": ["error", "never"],
        "max-depth": ["error", 5],
        "max-lines-per-function": ["error", { max: 600 }],
        "no-multi-spaces": ["error", { ignoreEOLComments: true, exceptions: { Property: true } }],
        "no-regex-spaces": "error",
        "prettier/prettier": [
            "error",
            {
                trailingComma: "none",
                arrowParens: "always",
                endOfLine: "auto",
                tabWidth: 2,
            },
        ],
    },
};
