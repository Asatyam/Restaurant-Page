/* eslint-disable no-console */
import { createWebsite } from './initial';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

createWebsite();
home();
// const content = document.querySelector('.content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');

homeBtn.addEventListener('click', home);
menuBtn.addEventListener('click', menu);
contactBtn.addEventListener('click', contact);
