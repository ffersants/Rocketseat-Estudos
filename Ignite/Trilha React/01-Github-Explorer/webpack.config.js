const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'production'

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
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,    
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    mode: isDevelopment ? 'development' : 'production',
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devtool: isDevelopment ? 'eval-source-map' : 'source-map'
}