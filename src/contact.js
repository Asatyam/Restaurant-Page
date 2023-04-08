function contact() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
  content.setAttribute('class', 'content');
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('class', 'contact');
  const contactPara = document.createElement('p');
  const contactHeading = document.createElement('h1');
  contactHeading.textContent = 'Contact Us';
  // eslint-disable-next-line operator-linebreak
  contactPara.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod';
  contactDiv.appendChild(contactHeading);
  contactDiv.appendChild(contactPara);
  content.appendChild(contactDiv);
  content.classList.add('contact-us');
}

// eslint-disable-next-line import/prefer-default-export
export { contact };
