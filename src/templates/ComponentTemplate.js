import './{{pascalCase name}}.scss';

const create{{pascalCase name}} = () => {
  const element = document.createElement('div');
  element.className = '{{pascalCase name}}';
  return element;
};

export default create{{pascalCase name}};
