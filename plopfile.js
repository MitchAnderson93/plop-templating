module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'Generate a new component',
      prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Enter the component name (in PascalCase):',
        },
      ],
      actions: [
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
            templateFile: 'src/templates/ComponentTemplate.js',
        },
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
            templateFile: 'src/templates/ComponentTemplate.stories.js',
        },
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
            templateFile: 'src/templates/ComponentTemplate.scss',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile: 'src/templates/ComponentTemplate.test.js',
      },
      ],
    });
};
  