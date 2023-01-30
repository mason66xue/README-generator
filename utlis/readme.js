// RENDER LICENSE BADGE FUNCTION
function renderLicenseBadge(data) {
    if (data.Licenses !== 'N/A') {
      return `![License: ${data.Licenses}](https://img.shields.io/badge/License-${data.projectLicense}-blue.svg)`;
    } else {
      return '';
    }
  }


// RENDER LICENSE LINK FUNCTION
function renderLicenseLink(data) {
    if (data.License !== 'N/A') {
      return `(https://opensource.org/licenses/Apache-2.0)`;
    } else if (data.Licenses === 'ISC') {
      return `(https://opensource.org/licenses/ISC)`;
    } else if (data.Licenses === 'MIT') {
      return `(https://opensource.org/licenses/MIT)`;
    } else if (data.Licenses === 'MPL_2.0') {
      return `(https://opensource.org/licenses/MPL-2.0)`;
    } else if (data.Licenses === 'AGPL_v3') {
      return `(https://www.gnu.org/licenses/agpl-3.0)`;
    } else if (data.Licenses === 'GPLv3') {
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (data.Licenses === 'Unlicense') {
      return `(http://unlicense.org/)`;
    } else {
      return '';
    }
  }


// RENDER LICENSE SECTION FUNCTION
function renderLicenseSection(data) {
    if (data.Licenses !== 'N/A') {
      return `
    ## License
    This application is covered by the ${data.Licenses} license.<br>
    ${renderLicenseLink(data)}
    `
    } else {
      return ``
    }
  }


//function to generate README

function generateReadme(data) {
    return`# ${data.Title}
    
    ${renderLicenseBadge(data)}
    ## Description
    
    ${data.Description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.Installation}
    
    ## Usage
    
    ${data.Usage}
    
    
    ## Credits
    
    ${data.Credits}
    ${renderLicenseSection(data)}
    ## Features
    
    ${data.Features}
    
    ## How to Contribute
    
    ${data.Guidelines}
    
    ## Tests
    
    ${data.Test}
    
    ## Questions
    
    Github: [${data.github}](https://github.com/${data.github})<br>
    Email: [${data.Email}](mailto:${data.Email})`
  
  }
  









module.exports= generateReadme;