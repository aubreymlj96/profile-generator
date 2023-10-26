// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = "";
    console.log(license);
    if(license == 'MIT') {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license == 'ISC'){
      badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else if (license == 'GPL'){
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license == 'Mozilla Public License 2.0'){
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license == 'IBM Public License Version 1.0'){
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (license == 'Zlib'){
      badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
    } else if (license == 'GNU AGPL 3.0'){
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (license == ''){
      badge = '';
    }
    console.log(badge);
    return badge;
  };
  
  // TODO: Create a function that returns the license link
  // Source for license badge links above - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  // Source for badges - https://shields.io/badges/static-badge
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let linkToLicense;
    switch(license) {
      case "MIT":
        linkToLicense = "https://opensource.org/licenses/MIT";
        break;
      case "ISC":
        linkToLicense = "https://opensource.org/licenses/ISC";
        break;
      case "GPL":
        linkToLicense = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "Mozilla Public License 2.0":
        linkToLicense = "https://opensource.org/licenses/MPL-2.0";
        break;
      case "IBM Public License Version 1.0":
        linkToLicense = "https://opensource.org/licenses/IPL-1.0";
        break;
      case "Zlib":
        linkToLicense = "https://opensource.org/licenses/Zlib";
        break;
      case "GNU APGL 3.0":
        linkToLicense = "https://www.gnu.org/licenses/agpl-3.0";
        break;
      default:
        linkToLicense = "";
        console.log('License not found');
        break;
    }
    
    return linkToLicense;
  };

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    console.log(data);
    const sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];
    // const data = [title, description, install, usage, contributors, test, license, email, github];

    let markdown = "# " + data.title + "\n";
    
    markdown += renderLicenseBadge(data.license) + "\n";
    
    // '+=' adds a value to a variable as is shown for the statement above and the ones below
  
    markdown += "## Table of Contents\n";
    for (let i=0; i<sections.length; i++) {
      if (! (sections[i] === "License" && data.license === "None")) {
        markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
      }
    }
    markdown += "\n";
  
    markdown += "## " + sections[0] + "\n";
    markdown += data.description + "\n";
  
    markdown += "## " + sections[1] + "\n";
    markdown += data.install + "\n";
  
    markdown += "## " + sections[2] + "\n";
    markdown += data.usage + "\n";
  
    markdown += "## " + sections[3] + "\n";
    markdown += data.contributors + "\n";
  
    markdown += "## " + sections[4] + "\n";
    markdown += data.test + "\n";
  
    markdown += renderLicenseSection(data.license) + "\n";

    markdown += renderLicenseBadge(data.license) + "\n";
  
    markdown += "## " + sections[6] + "\n";
    markdown += "If you have any questions about this project, please contact me directly at " + data.email + ". You can view more of my projects at https://github.com/" + data.github + "n Github\n.";
 
    return markdown;
  };

  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = "";
    if (license != "None") {
      licenseSection += "## License\n"
      licenseSection += "Please visit " + renderLicenseLink(license) + " to get more information for this license\n";
    }
  
    return licenseSection;
  };


module.exports = generateMarkdown;