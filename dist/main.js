(() => {
  const e = document.querySelector('.main');
  const t = (e, t) => {
    const n = document.createElement('button');
    n.setAttribute('class', `${t}-btn`),
      (n.textContent = t.toUpperCase()),
      e.appendChild(n);
  };
  function n() {
    const e = document.querySelector('.content');
    (e.innerHTML = ''), e.setAttribute('class', 'content');
    const t = document.createElement('div');
    t.setAttribute('class', 'about');
    const n = document.createElement('img');
    n.setAttribute('src', './images/chef.jpg'), t.appendChild(n);
    const c = document.createElement('p');
    (c.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab, cum expedita explicabo laboriosam sequi facilis incidunt sed adipisci itaque voluptatum quidem exercitationem quasi, voluptates atque nemo repudiandae ipsum eius.'),
      t.appendChild(c),
      e.appendChild(t),
      e.classList.add('home');
  }
  !(function () {
    (() => {
      const t = document.createElement('div');
      const n = document.createElement('p');
      t.setAttribute('class', 'heading'),
        (n.textContent = 'Eat Love Repeat'),
        t.appendChild(n),
        e.appendChild(t);
    })(),
      (() => {
        const n = document.createElement('div');
        t(n, 'home'),
          t(n, 'menu'),
          t(n, 'contact'),
          n.setAttribute('class', 'tabs'),
          e.appendChild(n);
      })();
    const n = document.createElement('div');
    n.setAttribute('class', 'content'), e.append(n);
  })(),
    n();
  const c = document.querySelector('.home-btn');
  const s = document.querySelector('.menu-btn');
  const i = document.querySelector('.contact-btn');
  c.addEventListener('click', n),
    s.addEventListener('click', () => {
      const e = document.querySelector('.content');
      (e.innerHTML = ''), e.setAttribute('class', 'content');
      const t = document.createElement('div');
      t.setAttribute('class', 'menu');
      for (let e = 0; e < 6; e++) {
        const n = document.createElement('div');
        const c = document.createElement('img');
        const s = document.createElement('p');
        c.setAttribute('src', `./images/item${e + 1}.jpeg`),
          (s.textContent = 'Lorem ipsum dolor sit amet, consectetur.'),
          n.setAttribute('class', 'item'),
          n.appendChild(c),
          n.appendChild(s),
          t.appendChild(n);
      }
      e.appendChild(t), e.classList.add('menuList');
    }),
    i.addEventListener('click', () => {
      const e = document.querySelector('.content');
      (e.innerHTML = ''), e.setAttribute('class', 'content');
      const t = document.createElement('div');
      t.setAttribute('class', 'contact');
      const n = document.createElement('p');
      const c = document.createElement('h1');
      (c.textContent = 'Contact Us'),
        (n.textContent =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod'),
        t.appendChild(c),
        t.appendChild(n),
        e.appendChild(t),
        e.classList.add('contact-us');
    });
})();
