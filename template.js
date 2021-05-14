function getReadme(
  title,
  description,
  fileName,
  installation,
  usage,
  license,
  contributing,
  tests, 
  userName,
  email
) {
  const readme = `
# ${title}  ![${license}](https://img.shields.io/badge/license-${license}-blue.svg)  
![Screenshot](${fileName})
# Description
${description}
# Table Of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
${installation}
# Usage
${usage}
# License
This application is protected under conditions of the ${license} license.
# Contributing
${contributing}
# Tests
${tests}
# Questions
My GitHub Profile: http://www.github.com/${userName}  
Please feel free to contact me with any inquiries via email at ${email}.
`;
  return readme;
}

module.exports = {
  getReadme,
};
