module.exports = {
  presets: [
    require.resolve("@babel/preset-env"),
    require.resolve("@babel/preset-typescript"),
    [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
  ],
  plugins: [
    [
      require.resolve("@babel/plugin-transform-class-properties"),
      { loose: true },
    ],
    [
      require.resolve("@babel/plugin-transform-private-methods"),
      { loose: true },
    ],
    [
      require.resolve("@babel/plugin-transform-private-property-in-object"),
      { loose: true },
    ],
    require.resolve("@babel/plugin-transform-numeric-separator"),
  ],
};
