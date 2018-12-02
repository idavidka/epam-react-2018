const path = require('path');

module.exports = {
    context: path.join(__dirname, 'lib'),
    entry: './index',
    output: {
        filename: 'task-1.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'none',
    watch: true
};