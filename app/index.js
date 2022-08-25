'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

    }
    async start() {
        const answers = await this.prompt([
            {
                type: 'input',
                name: 'folder',
                message: 'Enter a name for the folder: '
            },
            {
                type: 'input',
                name: 'file',
                message: 'Enter a name for the file: '
            }
        ]);
        // create destination folder
        this.destinationRoot("yeoman-output/" + answers.folder);

        this.fs.copyTpl(
            this.templatePath('./'),
            this.destinationPath(answers.file + ".html"),
            { message: 'Hello world!' }
        );
    }
}