function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${license} license.`;
  } else {
    return "";
  }
}

module.exports = renderLicenseSection;
