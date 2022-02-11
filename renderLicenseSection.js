function renderLicenseSection(license) {
  if (license) {
    if (license === "NONE") {
      return "You are unlicensed 🚨";
    }
    return `This application is covered under the ${license} license.`;
  }
  return "";
}

module.exports = renderLicenseSection;
