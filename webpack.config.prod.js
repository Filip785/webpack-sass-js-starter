const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = env => {
    const allProjects = {
        firstBrazino: './src/projects/brazino/1/index.js',
        secondBrazino: './src/projects/brazino/2/index.js'
    };

    const rules = [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        }
    ];

    const plugins = [
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css'
        })
    ];

    for (let item of Object.keys(allProjects)) {
        const project = allProjects[item];

        plugins.push(new HtmlWebpackPlugin({
            filename: `${item}.html`,
            template: project.replace(/index.js/g, 'index.html'),
            inject: 'body',
            scriptLoading: 'blocking',
            chunks: [item],
            publicPath: './'
        }));
    }

    return {
        mode: 'production',
        entry: allProjects,
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name]/[name].build.js'
        },
        resolve: {
            extensions: ['*', '.js']
        },
        module: {
            rules
        },
        plugins
    };
};