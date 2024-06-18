import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Hinzufügen von Node.js-Umgebung
        ...globals.jest, // Hinzufügen von Jest-Umgebung
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX-Unterstützung aktivieren
        },
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    ...pluginReactConfig,
    settings: {
      react: {
        version: "detect", 
      },
    },
  },
];
