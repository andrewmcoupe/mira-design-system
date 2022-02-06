export default {
  ".ts?(x)": "eslint --cache --fix",
  "*.{js,css,md}": "prettier --write",
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};
