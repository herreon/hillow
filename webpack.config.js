const path = require("path");

module.exports = {
    entry: "./frontend/zillowne.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'raw-loader'],
            }, {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: ['url-loader']
            }],

    },
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
