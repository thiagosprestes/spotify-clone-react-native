module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-prese"],
    plugins: [
      "babel-plugin-styled-components",
      [
        "babel-plugin-root-import",
        {
          rootPathPrefix: "~",
          rootPathSuffix: "src",
        },
      ],
    ],
  };
};
