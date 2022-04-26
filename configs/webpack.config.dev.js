const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, '../src/index.js'),
    devServer: {
        hot: true,
        open: true,
        port: 3001,
        host: 'localhost',
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
            'public': path.resolve(__dirname, '../public'),
        },
        modules: ['node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'All Trails To Lunch',
            template: path.resolve(__dirname, '../public/index.html'),
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: 'asset/inline',
            }
        ],
    },
};
