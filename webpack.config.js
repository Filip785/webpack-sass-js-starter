const path = require('path');

module.exports = env => {
    const allProjects = {
        firstBrazino: './src/projects/brazino/1/index.js',
        secondBrazino: './src/projects/brazino/2/index.js'
    };

    const project = env.project;

    let selectedProject = null;

    if (project) {
        selectedProject = Object.keys(allProjects).find(item => item === project);

        if (!selectedProject) {
            throw `Can't find this project: ${env.project}`;
        }
    }
    
    return {
        entry: selectedProject ? {
            [selectedProject]: allProjects[selectedProject]
        } : allProjects,
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].build.js'
        }
    };
};