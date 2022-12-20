//function to generate README

function generateReadme(answers){
return
`
## Description 
${answers.Title};

## Contributor
${answers.Description};

## Contributor
${answers.Contributor};

## License
${answers.License};

## Test
${answers.Test};

## Github
${answers.Github};

## Linkedin
${answers.Linkedin};

`;} 

module.experts=generateReadme;