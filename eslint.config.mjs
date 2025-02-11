import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ["**/dist", "**/.eslintrc.cjs", "**/types.d.ts"]
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended"
    )
  ),
  {
    plugins: {
      "react-refresh": reactRefresh,
      prettier: fixupPluginRules(prettier)
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      parser: tsParser
    },

    rules: {
      "react-refresh/only-export-components": [
        "error",
        {
          allowConstantExport: true
        }
      ],

      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": ["off"],
      "no-alert": "error",
      "no-empty-function": "error",

      "no-magic-numbers": [
        "off",
        {
          ignore: [0, 1, -1]
        }
      ],

      "no-debugger": "error",
      "comma-dangle": ["error", "never"],
      "max-depth": ["error", 5],

      "max-lines-per-function": [
        "error",
        {
          max: 600
        }
      ],

      "no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: true,

          exceptions: {
            Property: true
          }
        }
      ],

      "no-regex-spaces": "error",

      "prettier/prettier": [
        "error",
        {
          trailingComma: "none",
          arrowParens: "always",
          endOfLine: "auto",
          tabWidth: 2
        }
      ]
    }
  }
];
