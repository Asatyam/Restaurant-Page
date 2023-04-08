function menu() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
  content.setAttribute('class', 'content');

  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    const itemDiv = document.createElement('div');
    const itemImg = document.createElement('img');
    const itemPara = document.createElement('p');
    itemImg.setAttribute('src', `./images/item${i + 1}.jpeg`);
    itemPara.textContent = 'Lorem ipsum dolor sit amet, consectetur.';
    itemDiv.setAttribute('class', 'item');
    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemPara);
    menuDiv.appendChild(itemDiv);
  }
  content.appendChild(menuDiv);
  content.classList.add('menuList');
}

// eslint-disable-next-line import/prefer-default-export
export { menu };
