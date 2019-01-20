const express = require('express');
const server = express();
const path = require('path');
const webpack = require('webpack');

const config = require('../../webpack.config')();

const PORT = process.env.PORT || 8080;
let isBuilt = false;

server.listen(PORT, () => {
    isBuilt = true;
    console.log(
        `Server listening on \x1b[42m\x1b[1mhttp://localhost:${PORT}\x1b[0m in \x1b[41m${
            process.env.NODE_ENV
            }\x1b[0m 🌎...`,
    );
});

const done = () => {
    !isBuilt && console.log('Done');
};

    const compiler = webpack([config]);

    const serverCompiler = compiler.compilers[0];

    const webpackHotMiddlware = require('webpack-dev-middleware')(
        compiler,
        serverCompiler.devServer,
    );

    server.use(webpackHotMiddlware);
    console.log('Middleware enabled');
    done();