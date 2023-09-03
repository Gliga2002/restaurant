// import img
import { createImg } from "./website";
import {createHeadingPrimary, createParagraph, createButton, createDiv} from './general';

import customerBenImg from './assets/customers/ben.jpg';
import customer1Img from './assets/customers/customer-1.jpg';
import customer2Img from './assets/customers/customer-2.jpg';
import customer3Img from './assets/customers/customer-3.jpg';
import customer4Img from './assets/customers/customer-4.jpg';
import customer6Img from './assets/customers/customer-6.jpg';

import heroImg from './assets/hero.png';





const imgArray = [
  customerBenImg, 
  customer1Img,
  customer2Img,
  customer3Img,
  customer4Img,
  customer6Img
]


function createHome() {

const div = createDiv('home', 'container', 'grid','grid--2-column', 'gap--el');

 div.appendChild(homeTextBox());
 div.appendChild(homeImgBox());

 return div;
}

function homeTextBox() {
  const div = createDiv('home-text-box');

  
  const headingPrimary = 'A healthy meal delivered to your door, every single day';
  div.appendChild(createHeadingPrimary(headingPrimary,'heading--primary'));

  const descriptionText = 'The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.'
  div.appendChild(createParagraph(descriptionText, 'hero-description'))


  const btnCTAcontent = 'Start eating well'
  div.appendChild(createButton(btnCTAcontent,'btn','btn--full','margin-right--md'))
  const btnInfoContent = 'Learn more';
  div.appendChild(createButton(btnInfoContent,'btn','btn--outline'))

  div.appendChild(deliveredMeals());

  return div;

}


function homeImgBox() {

  const div = createDiv('home-img-box');


   div.append(createImg(heroImg,'Women enjoying food','hero-img'));

   return div;
}


function deliveredMeals() {
  const div = createDiv('delivered-meals');

  div.appendChild(deliveredImgs());
  div.appendChild(deliveredText());

  return div;

}


function deliveredImgs() {
 const div = createDiv('delivered-meals-imgs')

  imgArray.forEach((url) => {
    div.appendChild(createImg(url, 'customer', 'customer-img'))
  })

  return div;
}


function deliveredText() {
  const p = document.createElement('p');
  p.classList.add('delivered-meals-text');
  p.innerHTML = `<span>250,000+ </span>meals delivered last year!`;

  return p;
}

// refaktorisi ovaj kod
function loadHome() {
  const section = document.querySelector('section');
  section.setAttribute('class','');
  section.classList.add('section-home');
  section.textContent = '';
  section.appendChild(createHome());
}

export default loadHome;