const path = require('path')

module.exports = {
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target: 'node',
    mode: process.env.NODE_ENV || 'development'
}