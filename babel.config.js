module.exports = api => {
  const inProd = api.env("production");
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      inProd && ["react-remove-properties", { properties: ["data-testid"] }],
    ].filter(Boolean),
  };
};
