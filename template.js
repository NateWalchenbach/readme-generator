const renderLicense = require("./renderLicense");
const renderLicenseSection = require("./renderLicenseSection");
module.exports = {
  createTemplate,
};

function createTemplate(data) {
  const {
    title,
    description,
    install,
    usage,
    license,
    contribute,
    test,
    questions,
    email,
    github,
  } = data;

  const licenseImage = renderLicense(license);
  const licenseContent = renderLicenseSection(license);

  return `
# **${title}**
## TABLE OF CONTENTS:
### -[Description](#description)
### -[Installation](#installation)
### -[Usage](#usage)
### -[License](#license)
### -[Contact Me](#email)

### **Description:** 
 ${description}

### **Installation Requirements:** 
 ${install}

### **Usage:** 
 ${usage}

### **License:** 
 ${licenseImage}
 ${licenseContent}

### **Contributions:**
#### ${contribute}

### **Test:** 
#### ${test}

### **Usage:** 
 ${usage}

### **Questions??:** 
${questions}


## **Contact me:** 
If you have any questions feel free to reach out to me at my email below. 

Email -  ${email}

If you are interested in seeing any of my work, click the link below.
Github - 'https://github.com/${github}'
`;
}

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
