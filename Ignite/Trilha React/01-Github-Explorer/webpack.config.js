const path = require('path')

module.exports = {
    //especifica o arquivo principal da aplicação
    entry: path.resolve(__dirname, 'src', 'Index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    mode: 'development'
}