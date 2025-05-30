// plopfile.js (this must be at the root of your project folder)
module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component.jsx.hbs",
      },
    ],
  });
};
