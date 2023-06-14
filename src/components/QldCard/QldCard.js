import './QldCard.scss';

const createQldCard = () => {
  const element = document.createElement('div');
  element.className = 'QldCard';

  const heading = document.createElement('h1');
  heading.textContent = 'QldCard Component';

  element.appendChild(heading);

  return element;
};

export default createQldCard;
