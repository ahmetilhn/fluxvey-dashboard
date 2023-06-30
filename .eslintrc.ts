export default {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    camelcase: "error",
    "spaced-comment": "error",
    quotes: [2, "single", { avoidEscape: true }],
    "no-duplicate-imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
