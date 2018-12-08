const path = require('path')
      webpack = require('webpack'),
      htmlPlugin = require('html-webpack-plugin');

module.exports = (env = {}, options = {}) => {
    const config = {
        mode: env.production === true ? 'production' : 'development',
        context: path.join(__dirname, 'lib'),
        entry: './app',
        output: {
            filename: 'app.js',
            path: path.join(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.jsx', '.js']
        },
        devtool: env.production === true ? 'source-map' : 'none',
        watch: options.watch === true,
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
                                sourceMap: env.production === true,
                                modules: true,
                                localIdentName: "[local]___[hash:base64:5]"
                            }
                        },
                        {
                            loader: "less-loader"
                        }
                    ]
                }
            ]
        },
        plugins: [
            new htmlPlugin({
                title: 'Task 3',
                template: './app.html'
            }),
            new webpack.ProvidePlugin({
                _: "lodash"
            })
        ]
    };

    return config;
};