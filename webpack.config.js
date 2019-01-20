const path = require('path')
      webpack = require('webpack'),
      htmlPlugin = require('html-webpack-plugin');

const assetsFolder = path.join(__dirname, 'assets');

module.exports = (env = {}, options = {}) => {
    const pkg = require('./package.json');
    const version = pkg.version.match(/(\d+)/g)[2];

    const config = {
        name: 'home-work',
        mode: env.production === true ? 'production' : 'development',
        context: path.join(__dirname, 'lib'),
        entry: './app',
        output: {
            publicPath: '/',
            filename: 'app.js',
            path: path.join(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.jsx', '.js']
        },
        devtool: env.production === true ? 'source-map' : 'none',
        watch: options.watch === true,
        devServer: {
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: env.production === true
                            }
                        },
                        {
                            loader: "less-loader"
                        }
                    ]
                },
                {
                    test: /\.(png|gif|jpe?g|svg|ico)$/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: [
            new htmlPlugin({
                title: `Task - ${version}`,
                template: './app.html'
            }),
            new webpack.ProvidePlugin({
                _: 'lodash'
            })
        ]
    };

    return config;
};