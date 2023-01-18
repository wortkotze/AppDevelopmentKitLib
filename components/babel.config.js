module.exports = function (api) {
  api.cache(true);
  return {
    presets: [],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module-resolver",
        {
          alias: {
            lib: "./lib",
            components: "./components",
          },
        },
      ],
    ],
  };
};
