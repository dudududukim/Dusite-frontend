module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Dusite",
    },
  },
  outputDir: "../Dusite-backend/app/src/public",
};
