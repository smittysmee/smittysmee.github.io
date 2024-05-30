// eslint.config.js
import js from "@eslint/js";
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import jestdom from 'eslint-plugin-jest-dom';
import globals from "globals";
import babelParser from "@babel/eslint-parser";


export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    jestdom.configs['flat/recommended'],
    jest.configs['flat/recommended'],
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        },
        ignores: ["dist/*"],
    },
    {
        files: ["**/*.js", "**/*.mjs", "**/*.ts", "**/*.tsx"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    {
        files: ["**/*.js", "**/*.mjs"],
        languageOptions: {
            parser: babelParser
        }
    }

];