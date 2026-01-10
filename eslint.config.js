import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginTailwindcss from "eslint-plugin-tailwindcss";
import pluginUnusedImports from "eslint-plugin-unused-imports";

import globals from "globals";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig([
    // 1. Fichiers ignorés
    {
        ignores: [
            "dist/",
            "build/",
            "node_modules/",
            ".react-router/",
            "server.ts",
            "eslint.config.ts",
            "postcss.config.js",
            "eslint.config.js",
            "react-router.config.ts",
        ],
    },

    js.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tseslintParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: ["./tsconfig.node.json", "./tsconfig.vite.json"],
            },
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        plugins: {
            "@typescript-eslint": tseslintPlugin,
        },
        rules: {
            ...tseslintPlugin.configs.recommended.rules,
        },
    },

    // 3. Config React / TSX
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            parser: tseslintParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: "latest",
                sourceType: "module",
                project: ["./tsconfig.node.json", "./tsconfig.vite.json"],
                tsconfigRootDir: __dirname,
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react: pluginReact,
            "react-hooks": pluginReactHooks,
            "jsx-a11y": pluginJsxA11y,
            tailwindcss: pluginTailwindcss,
            "unused-imports": pluginUnusedImports,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,

            // Imports inutilisés
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],

            // React
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-uses-react": "off",
            "no-undef": "off",
            // Tailwind
            "tailwindcss/classnames-order": "warn",
            "tailwindcss/no-custom-classname": "off",
            // Console
            "no-console": "warn",
            quotes: ["error", "double"],
            "jsx-quotes": ["error", "prefer-double"],
            "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],

            "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
        },
    },
]);
