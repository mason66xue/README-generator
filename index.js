// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const fs=require('fs');
const generateReadme=require('./utlis/readme');

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
      name: 'Guidelines',
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
    {
      type: 'input',
      name:'Email',
      message:'Enter your Email'
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What is your installation'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is the usage'
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'What is the credits'
    },
    {
      type: 'input',
      name: 'Features',
      message: 'What is the feature?'
    }
  ])

  // callback function 
  .then((answers) => {
    console.log(answers)
    const readmeContent = generateReadme(answers);
//write Files in README.md format
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });