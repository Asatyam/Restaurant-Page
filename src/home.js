function home() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
  content.setAttribute('class', 'content');

  const aboutDiv = document.createElement('div');
  aboutDiv.setAttribute('class', 'about');
  const aboutImg = document.createElement('img');
  aboutImg.setAttribute('src', './images/chef.jpg');
  aboutDiv.appendChild(aboutImg);
  const aboutPara = document.createElement('p');
  // eslint-disable-next-line operator-linebreak
  aboutPara.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab, cum expedita explicabo laboriosam sequi facilis incidunt sed adipisci itaque voluptatum quidem exercitationem quasi, voluptates atque nemo repudiandae ipsum eius.';
  aboutDiv.appendChild(aboutPara);
  content.appendChild(aboutDiv);
  content.classList.add('home');
}

// eslint-disable-next-line import/prefer-default-export
export { home };
