const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve("./app.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    }
}