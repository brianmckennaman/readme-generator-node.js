//include required packages, Inquirer and File System
const inquirer = require('inquirer')

const fs = require('fs')

//create user prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the name of your project',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a description for your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Provide instructions on how to install your project',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide usage information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Provide any contributions ',
            name: 'contribution',
        },
        {
            type: 'list',
            message: 'Choose a license',
            name: 'license',
            choices: ['IBM', 'Mozilla', 'Apache'],
        },
        {
            type: 'input',
            message: 'Provide information about the chosen license',
            name: 'licenseinfo',
        },
        {
            type: 'input',
            message: 'Provide test instructions',
            name: 'testinstructions',
        },
        {
            type: 'input',
            message: 'Enter your Github username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address',
            name: 'email',
        }
    ])

// create reponse object
    .then((response) => {
        //create a license badge
        if (response.license = 'IBM') {
            response.license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        } 
        else if (response.license = 'Mozilla') {
            response.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        }
        else {
            response.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        };
        
        //write response into a readme.md
        fs.writeFile('readme.md', `# ${response.title}       ${response.license}
# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Test](#tests)
7. [Questions](#questions)

## Description
${response.description}
        
## Installation 
${response.installation}

## Usage
${response.usage}

## License
${response.licenseinfo}

## Contributing 
${response.contribution}

## tests
${response.testinstructions}

## Questions 
${response.github}
${response.email}`,

(err) => err ? console.error(err) : console.log('Success!'))
    })