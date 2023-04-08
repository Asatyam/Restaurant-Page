/* eslint-disable import/prefer-default-export */

const main = document.querySelector('.main');
const createHeading = () => {
  const headingDiv = document.createElement('div');
  const headingPara = document.createElement('p');
  headingDiv.setAttribute('class', 'heading');
  headingPara.textContent = 'Eat Love Repeat';
  headingDiv.appendChild(headingPara);
  main.appendChild(headingDiv);
};

function createWebsite() {
  createHeading();
  console.log('working');
}
export { createWebsite };
