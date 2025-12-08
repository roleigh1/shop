module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true // <-- Hier Jest-Globals aktivieren
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "jest"], // Jest-Plugin hinzufügen
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["node_modules/", "build/", "dist/"]
};
