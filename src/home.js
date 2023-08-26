// import img
import { createImg } from "./website";


const imgArray = [
  'assets/customers/ben.jpg', 
  'assets/customers/customer-1.jpg',
  'assets/customers/customer-2.jpg',
  'assets/customers/customer-3.jpg',
  'assets/customers/customer-4.jpg',
  'assets/customers/customer-6.jpg'
]


function createHome() {
 const div = document.createElement('div');
 div.classList.add('home');

 div.appendChild(homeTextBox());
 div.appendChild(homeImgBox());

 return div;
}

function homeTextBox() {
  const homeTextBox = document.createElement('div');
  homeTextBox.classList.add('home-text-box');

  homeTextBox.appendChild(createHeadingPrimary('A healthy meal delivered to your door, every single day'));
  homeTextBox.appendChild(createParagraph('The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.'))
  homeTextBox.appendChild(createButton('Start eating well','btn','btn--full'))
  homeTextBox.appendChild(createButton('Learn more','btn','btn--outline'))

  homeTextBox.appendChild(deliveredMeals());

  return homeTextBox

}


function homeImgBox() {

  const homeImgBox = document.createElement('div');
  homeImgBox.classList.add('home-img-box');

   createImg('assets/hero.png','Women enjoying food','hero-img');

   return homeImgBox
}


// Resable functions
function createHeadingPrimary(content, ...classes) {
  const h1 = document.createElement('h1');
  h1.textContent = content
  h1.classList.add('heading--primary', ...classes);

  return h1;
}


function createParagraph(content, ...classes) {
  const p = document.createElement('p');
  p.textContent = content;
  p.classList.add(...classes);

  return p;
}

function createButton(name, ...classes) {
  const button = document.createElement('button');
  button.textContent = name;
  button.classList.add(...classes);

  return button;
}

//////////////////////////////////////////////





function deliveredMeals() {
  const div = document.createElement('div');
  div.classList.add('delivered-meals');

  div.appendChild(deliveredImgs());
  div.appendChild(deliveredText());

  return div;

}


function deliveredImgs() {
  const div = document.createElement('div');
  div.classList.add('delivered-imgs');

  imgArray.forEach((url) => {
    div.appendChild(createImg(url, 'customer', 'customer-img'))
  })

  return div;
}


function deliveredText() {
  const p = document.createElement('p');
  p.classList.add('delivered-text');
  p.textContent = `<span>250,000+ <span>meals delivered last year!`;

  return p;
}

function loadHome() {
  const section = document.querySelector('section');
  section.textContent = '';
  section.removeAttribute('class');
  section.appendChild(createHome());
}

export default loadHome;