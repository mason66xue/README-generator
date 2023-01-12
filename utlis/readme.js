// RENDER LICENSE BADGE FUNCTION
function renderLicenseBadge(data) {
    if (data.projectLicense !== 'N/A') {
      return `![License: ${data.projectLicense}](https://img.shields.io/badge/License-${data.projectLicense}-blue.svg)`;
    } else {
      return '';
    }
  }


// RENDER LICENSE LINK FUNCTION
function renderLicenseLink(data) {
    if (data.projectLicense !== 'N/A') {
      return `(https://opensource.org/licenses/Apache-2.0)`;
    } else if (data.projectLicense === 'ISC') {
      return `(https://opensource.org/licenses/ISC)`;
    } else if (data.projectLicense === 'MIT') {
      return `(https://opensource.org/licenses/MIT)`;
    } else if (data.projectLicense === 'MPL_2.0') {
      return `(https://opensource.org/licenses/MPL-2.0)`;
    } else if (data.projectLicense === 'AGPL_v3') {
      return `(https://www.gnu.org/licenses/agpl-3.0)`;
    } else if (data.projectLicense === 'GPLv3') {
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (data.projectLicense === 'Unlicense') {
      return `(http://unlicense.org/)`;
    } else {
      return '';
    }
  }


// RENDER LICENSE SECTION FUNCTION
function renderLicenseSection(data) {
    if (data.projectLicense !== 'N/A') {
      return `
    ## License
    This application is covered by the ${data.projectLicense} license.<br>
    ${renderLicenseLink(data)}
    `
    } else {
      return ``
    }
  }


//function to generate README

function generateMarkdown(data) {
    return`# ${data.projectTitle}
    
    ${renderLicenseBadge(data)}
    ## Description
    
    ${data.projectDescription}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.projectInstallation}
    
    ## Usage
    
    ${data.projectUsage}
    
    
    ## Credits
    
    ${data.projectCredits}
    ${renderLicenseSection(data)}
    ## Features
    
    ${data.projectFeatures}
    
    ## How to Contribute
    
    ${data.projectGuidelines}
    
    ## Tests
    
    ${data.testInstructions}
    
    ## Questions
    
    Github: [${data.userGithub}](https://github.com/${data.userGithub})<br>
    Email: [${data.userEmail}](mailto:user@example.com)`
  
  }
  









module.experts=generateReadme;