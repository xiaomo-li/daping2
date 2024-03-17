module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"],
      unitPrecision: 2,
      exclude: /(node_module)/,
    },
  },
};
