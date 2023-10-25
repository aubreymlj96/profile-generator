// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project.',

    }, 
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',

    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What details should the user know in order to contribute to the repository?'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm index.js'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'ISC', 'GPL', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0', 'Zlib', 'GNU APGL 3.0'],
        default: ["MIT"],

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    }

];


// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "./read-me-copies/README.md";
    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log("Your " + filename + " has been created!")
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
};

// Function call to initialize app
init();
