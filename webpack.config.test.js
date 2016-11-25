var webpack = require('webpack');
var path = require('path');

const BASE_CSS_LOADER = 'css?sourceMap'
const CSS_MODULES_LOADER = [
    BASE_CSS_LOADER,
    'modules',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&');

module.exports = {
    resolve: {
        extensions: [ '', '.js', '.css' ],
    },
    devtool: 'inline-source-map',
    resolveLoader: {
        root: path.resolve(__dirname, '.')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                loaders: [
                    'css-module',
                    CSS_MODULES_LOADER
                ],
                include: path.join(__dirname, 'src/css'),
            },
            { test: /\.json$/, loader: 'json' },
            { test: /\.(png|jpg)$/, loader: 'null' },
        ],
    },
    externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
};
