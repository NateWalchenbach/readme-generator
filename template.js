module.exports = {
  createTemplate,
};

function createTemplate(data) {
  return `
        Name: ${data.name}
        Age:${data.age}
        Job:${data.job}
        `;
}
