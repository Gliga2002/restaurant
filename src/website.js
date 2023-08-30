// importuj loadHome, loadMenu, loadContact
import loadHome from "./home";
import loadMenu from './menu';
import loadContact from "./contact";
import {createImg} from './general';


function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const imgLogo = createImg('assets/omnifood-logo.png', 'logo','logo');
  header.appendChild(imgLogo);
  header.appendChild(createNav());

  return header;
}



function createNav() {
  const nav = document.createElement('nav');


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
    setActiveButton(button);
    loadSection();
  })

  return button;
}

function setActiveButton(clickedBtn) {
  console.log('set-active');
  const buttons = document.querySelectorAll('btn-nav');
  console.log(buttons);

  [...buttons].forEach(button => {
    console.log(`Iteration ${button} : Sent ${clickedBtn}`);
    if(button !== clickedBtn) button.classList.remove('active');
  })

  clickedBtn.classList.add('active');
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