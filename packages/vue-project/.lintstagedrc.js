export default {
    "**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}": "eslint --fix --ignore-path .gitignore",
    "src/*": "prettier --write"
}
