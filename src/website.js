// importuj loadHome, loadMenu, loadContact
import loadHome from "./home";


function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const imgLogo = createImg('assets/omnifood-logo.png', 'logo','logo');
  header.appendChild(imgLogo);
  header.appendChild(createNav());

  return header;
}

function createImg(url, imgName, classes) {
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', imgName);
  img.classList.add(...classes)
  return img;
}

function createNav() {
  const nav = document.createElement('nav');

  // const homeBtn = document.createElement('button');
  // homeBtn.classList.add('btn-nav');
  // homeBtn.textContent = "Home";
  // homeBtn.addEventListener("click",(e) => {
  //   if(e.target.classList.contains('active')) return;
  //     setActiveButton(homeBtn);
  //     loadHome();
  // })

  // const menuBtn = document.createElement('button');
  // menuBtn.classList.add('btn-nav');
  // menuBtn.textContent = 'Menu';
  // menuBtn.addEventListener('click',(e) => {
  //   if(e.target.classList.contains('active')) return;
  //     setActiveButton(menuBtn);
  //     loadMenu();
  // })

  // const contactBtn = document.createElement('button');
  // contactBtn.classList.add('btn-nav');
  // contactBtn.textContent = 'Contact';
  // contactBtn.addEventListener('click',(e) => {
  //   if(e.target.classList.contains('active')) return;
  //     setActiveButton(contactBtn);
  //     loadContact();
  // })

  nav.appendChild(createNavButton('Home', loadHome));
  // nav.appendChild(createNavButton('Menu', loadMenu));
  // nav.appendChild(createNavButton('Contact',loadContact));

  return nav;
}

function createNavButton(btnName, loadSection) {
  const button = document.createElement('button');
  button.classList.add(`btn`,`btn-nav`,`btn-nav--${btnName.toLowerCase()}`);
  button.textContent = btnName;
  button.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(button);
    loadSection();
  })

  return button;
}

function setActiveButton(clickedBtn) {
  const buttons = document.querySelectorAll('btn-nav');

  buttons.forEach(button => {
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


//removeAttribute('class')

function initalizeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  setActiveButton(document.querySelector('.btn-nav--home'));
  loadHome();
  
}

export  {initalizeWebsite, createImg}