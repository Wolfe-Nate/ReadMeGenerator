// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-important.svg)`;
}
// shields.io where you can find badges

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributed](#contributed)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributed 
  ${data.contributed}
  ## License 
  ${data.license}
  ## Test 
  ${data.test}
  ## Questions
  Feel free to reach out to me via:
  [${data.gitUserName}](https://github.com/${data.gitUserName})
  [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
