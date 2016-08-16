var webpack = require('webpack');
var path = require('path');

const CSS_MODULES_LOADER = [
    'modules',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&');

module.exports = {
    resolve: {
        extensions: [ '', '.js', '.css' ],
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: [ 'es2015', 'react', 'stage-2' ],
                }
            },
            {
                test: /\.css$/,
                loader: `css?${ CSS_MODULES_LOADER }`,
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
