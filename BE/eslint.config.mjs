import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "extends": ["next/core-web-vitals", "next/typescript"],
    "rules": {
      "max-lines": ["error", { "code": 160 }], // Limits file length to 160 lines
      "no-unused-vars": "warn",                // Warns on unused variables
      "eqeqeq": "error",                       // Enforces strict equality (===)
      "indent": ["error", 2],                  // Enforces 2-space indentation
      "semi": ["error", "always"],             // Requires semicolons
      "curly": "error",                        // Requires curly braces in control statements
      "comma-dangle": ["error", "never"],      // Disallows trailing commas
      "arrow-parens": ["error", "always"],     // Requires parentheses in arrow functions
      "no-trailing-spaces": "error",           // Disallows trailing spaces at the end of lines
      "object-curly-spacing": ["error", "always"], // Requires spaces inside curly braces
      "prefer-const": "error",                 // Prefers const over let when variables are not reassigned
      "no-var": "error"                        // Disallows var; prefers let/const
    }
  }
  
];