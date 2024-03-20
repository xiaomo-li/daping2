const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    client: {
      webSocketURL: "ws://0.0.0.0:8080/ws",
    },
    proxy: {
      "/api": {
        target: "http://38.55.215.190:6328/",
        changeOrigin: true,
      },
    },
  },

  publicPath: "./",
  outputDir: "daping2",
});
