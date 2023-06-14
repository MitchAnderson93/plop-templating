import './QldButton.scss';

const createQldButton = () => {
  const element = document.createElement('div');
  element.className = 'QldButton';

  const heading = document.createElement('h1');
  heading.textContent = 'QldButton Component';

  element.appendChild(heading);

  return element;
};

export default createQldButton;
