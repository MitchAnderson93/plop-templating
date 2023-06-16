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
          templateFile: 'config/Component.js',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
          templateFile: 'config/ComponentStory.stories.js',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
          templateFile: 'config/ComponentStyles.scss',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.hbs',
          templateFile: 'config/ComponentTemplate.hbs',
        },
      ],
    });
};
  