// importuj loadHome, loadMenu, loadContact
import loadHome from "./home";
import loadMenu from './menu';
import loadContact from "./contact";
import {createImg} from './general';

import logoImg from './assets/omnifood-logo.png';


function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header','flex');

  const imgLogo = createImg(logoImg, 'logo','logo');
  header.appendChild(imgLogo);
  header.appendChild(createNav());



  return header;
}



function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('header-nav', 'flex', 'gap--lg');


  nav.appendChild(createNavButton('Home', loadHome));
  nav.appendChild(createNavButton('Menu', loadMenu));
  nav.appendChild(createNavButton('Contact',loadContact));

  return nav;
}

function createNavButton(btnName, loadSection) {
  const button = document.createElement('button');
  button.classList.add(`btn`,`btn-nav`,`btn-nav--${btnName.toLowerCase()}`);

  
  button.textContent = btnName;
  button.addEventListener('click',(e) => {
    console.log('Ovde!')
    if(e.target.classList.contains('active')) return;
    setActiveButton(button);
    loadSection();
  })

  return button;
}



function setActiveButton(button) { 
  const buttons = document.querySelectorAll(".btn-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
 
}

function createMain() {
  const main = document.createElement('main');
  main.appendChild(createSection());
  return main;
}

function createSection() {
  return document.createElement('section');
}


function initalizeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  setActiveButton(document.querySelector('.btn-nav--home'));
  loadHome();
  
}

export  {initalizeWebsite, createImg}