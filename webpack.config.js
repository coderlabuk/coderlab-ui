var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {

    mode: "development",

    entry: './src/index.tsx',

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'CoderLab',
            template: './src/index.ejs', 
            // favicon: '../src/assets/img/favicon.png',
            cdns: [],
            metas: [
                {"charset": "utf-8"},
                {"name": "author"},
                {"http-equiv": "x-ua-compatible", "content": "ie=edge"},
                {"name": "viewport", "content": "width=device-width, initial-scale=1"}
            ]
        }),
    ],

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx"]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
