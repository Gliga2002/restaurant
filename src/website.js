// importuj loadHome, loadMenu, loadContact
import loadHome from "./home";
import loadMenu from './menu';
import loadContact from "./contact";
import {createImg} from './general';


function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header','flex');

  const imgLogo = createImg('assets/omnifood-logo.png', 'logo','logo');
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

  // nav.addEventListener('click',(e) => {
  //   console.log('sdasdasd')
  //   console.log(e.target)
  //   const btnNav = e.target.closest('btn')
  //   if(!btnNav) return;
  //   console.log(btnNav);
  // })

  // remove all active buttons imas gresku

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


// ispravi
function setActiveButton(clickedBtn) { 
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