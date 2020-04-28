const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve("./app.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
}