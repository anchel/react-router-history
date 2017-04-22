module.exports = {
    entry: [
        "babel-polyfill",
        "./lib/index.js"
    ],
    
    output: {
        path: __dirname + '/dist/',
        publicPath: "/output/",
        filename: 'index.js'
    },
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};