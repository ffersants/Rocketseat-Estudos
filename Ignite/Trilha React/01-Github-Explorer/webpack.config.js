const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'

console.log(isDevelopment)

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    //especifica o arquivo principal da aplicação
    entry: path.resolve(__dirname, 'src', 'Index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },    
    plugins: [
        //caso não estejamos em desenvolvimento, a verificação abaixo retornará
        //false, mas false não é um plugin do webpack, logo dará um erro
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    //pelo motivo descrito acima, nós usamos a função filter, 
    //que deixará no array de plugins somente aquilo que retornar true
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: { 
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,    
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
}