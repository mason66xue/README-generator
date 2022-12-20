// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const fs=require('fs');
// const generateReadme=require('./utils/readme');

const generateReadme=({ Title, Description, Contributor, License, Test, Github, Linkedin })=>
`

## Description 
${Title};

## Contributor
${Description};

## Contributor
${Contributor};

## License
${License};

## Test
${Test};

## Github
${Github};

## Linkedin
${Linkedin};

`

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'Table of Content',
        message: 'What is the Content?',
      },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the Title?',
      },
    {
      type: 'input',
      name: 'Description',
      message: 'What is the description?',
    },
    
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who are the contributors?',
    },
    {
        type: 'list',
        name: 'Licenses',
        message: 'choice the license',
       choices:[
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
      },
    {
      type: 'input',
      name: 'Test',
      message: 'What are the tests?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])

  // callback function 
  .then((answers) => {
    const readmeContent = generateReadme(answers);
//write Files in README.md format
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });