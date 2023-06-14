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
            templateFile: 'templates/ComponentTemplate.js',
        },
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
            templateFile: 'templates/ComponentTemplate.stories.js',
        },
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
            templateFile: 'templates/ComponentTemplate.scss',
        },
      ],
    });
  };
  