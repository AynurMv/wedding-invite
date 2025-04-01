import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import importPlugin from "eslint-plugin-import"
// import sonarjs from "eslint-plugin-sonarjs"
import unicornjs from "eslint-plugin-unicorn"

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended
    // , sonarjs.configs.recommended
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    import: importPlugin,
    unicornjs: unicornjs,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@src/", "./src"],
          ["@shared/", "./src/shared"],
          ["@assets/", "./src/shared/assets"],
          ["@ui/", "./src/shared/ui"],
          ["@features/", "./src/features"],
          ["@pages/", "./src/pages"],
        ],
      },
    },
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "import/no-relative-parent-imports": "error",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "no-console": "warn",
    eqeqeq: ["error", "always"],
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-var": "error",
    "import/order": [
      "error",
      {
        groups: [["builtin"], "external", "internal", ["parent", "sibling", "index"], "object", "type"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "newlines-between": "off",
    "import/no-duplicates": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: ["signature", "static-field", "instance-field", "constructor", "method"],
      },
    ],
  },
})
