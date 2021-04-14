module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "comma-dangle": [2, "never"],
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    "react/react-in-jsx-scope": 0,
    quotes: [2, "double"]
  }
};
