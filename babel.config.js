const presets =
  process.env["NODE_ENV"] !== "production"
    ? [
        ["@babel/preset-env", { targets: { node: "current" } }],
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
        "@babel/preset-typescript",
      ]
    : null;

const plugins = [];

module.exports = {
  presets,
  plugins,
};
