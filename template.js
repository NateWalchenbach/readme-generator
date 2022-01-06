module.exports = {
  createTemplate,
};

function createTemplate(data) {
  const { name, age, job } = data;
  return `
        Name: ${name}
        Age:${age}
        Job:${job}
        `;
}
