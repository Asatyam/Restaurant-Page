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

const createBtn = (tabsDiv, btnName) => {
  const btn = document.createElement('button');
  btn.setAttribute('class', btnName);
  btn.textContent = btnName.toUpperCase();
  tabsDiv.appendChild(btn);
};

const createTabs = () => {
  const tabsDiv = document.createElement('div');
  createBtn(tabsDiv, 'home');
  createBtn(tabsDiv, 'menu');
  createBtn(tabsDiv, 'contact');
  tabsDiv.setAttribute('class', 'tabs');
  main.appendChild(tabsDiv);
};

function createWebsite() {
  createHeading();
  createTabs();
}
export { createWebsite };
