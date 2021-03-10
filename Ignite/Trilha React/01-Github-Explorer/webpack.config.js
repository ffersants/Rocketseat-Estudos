const path = require('path')

module.exports = {
    //especifica o arquivo principal da aplicação
    entry: path.resolve(__dirname, 'src', 'index.js'),
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
                test: /\.jsx$/
            }
        ]
    }
}