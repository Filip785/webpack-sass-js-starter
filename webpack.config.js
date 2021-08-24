const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
    const allProjects = {
        firstBrazino: './src/projects/brazino/1/index.js',
        secondBrazino: './src/projects/brazino/2/index.js'
    };

    const project = env.project;
    const rules = [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    ];
    const plugins = [];

    let selectedProject = null;

    if (project) {
        selectedProject = Object.keys(allProjects).find(item => item === project);

        if (!selectedProject) {
            throw `Can't find this project: ${env.project}`;
        }

        // only add plugin / loader if dev and running single project
        plugins.push(
            new HtmlWebpackPlugin({
                template: allProjects[selectedProject].replace(/index.js/g, 'index.html')
            })
        );

        rules.push({
            test: /\.html$/,
            use: ['html-loader']
        });
    }

    return {
        mode: 'development',
        entry: selectedProject ? {
            [selectedProject]: allProjects[selectedProject]
        } : allProjects,
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].build.js'
        },
        resolve: {
            extensions: ['*', '.js']
        },
        module: {
            rules 
        },
        plugins,
        devServer: {
            static: path.join(__dirname, 'build'),
            compress: true,
            port: 3000
        }
    };
};