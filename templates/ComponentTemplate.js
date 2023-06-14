import './{{pascalCase name}}.scss';

const create{{pascalCase name}} = () => {
  const element = document.createElement('div');
  element.className = '{{pascalCase name}}';

  const heading = document.createElement('h1');
  heading.textContent = '{{pascalCase name}} Component';

  element.appendChild(heading);

  return element;
};

export default create{{pascalCase name}};
