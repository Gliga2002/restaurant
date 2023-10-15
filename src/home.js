import {
  createHeadingPrimary,
  createParagraph,
  createButton,
  createDiv,
  setSection,
  createImg,
} from './general';

import customerBenImg from './assets/customers/ben.jpg';
import customer1Img from './assets/customers/customer-1.jpg';
import customer2Img from './assets/customers/customer-2.jpg';
import customer3Img from './assets/customers/customer-3.jpg';
import customer4Img from './assets/customers/customer-4.jpg';
import customer6Img from './assets/customers/customer-6.jpg';

import heroImg from './assets/hero.png';
import heroImgLowRes from './assets/low-res-hero.png';

const imgArray = [
  customerBenImg,
  customer1Img,
  customer2Img,
  customer3Img,
  customer4Img,
  customer6Img,
];

function createHome() {
  const div = createDiv(
    'home',
    'container',
    'grid',
    'grid--2-column',
    'gap--el'
  );

  div.appendChild(homeTextBox());
  div.appendChild(homeImgBox());

  return div;
}

function homeTextBox() {
  const div = createDiv('home-text-box');

  const headingPrimary =
    'A healthy meal delivered to your door, every single day';
  div.appendChild(createHeadingPrimary(headingPrimary, 'heading--primary'));

  const descriptionText = `The smart 365-days-per-year food subscription that 
  will make you eat healthy again. Tailored to your personal tastes and nutritional needs.`;
  div.appendChild(createParagraph(descriptionText, 'hero-description'));

  const btnCTAcontent = 'Start eating well';
  div.appendChild(
    createButton(btnCTAcontent, 'btn', 'btn--full', 'margin-right--md')
  );
  const btnInfoContent = 'Learn more';
  div.appendChild(createButton(btnInfoContent, 'btn', 'btn--outline'));

  div.appendChild(deliveredMeals());

  return div;
}

function homeImgBox() {
  const div = createDiv('home-img-box');
  div.style.position = 'relative';

  const womenEatFoodImg = createImg(
    heroImgLowRes,
    'Women enjoying food',
    'hero-img'
  );
  womenEatFoodImg.setAttribute('data-src', heroImg);
  div.append(womenEatFoodImg);

  const p = createParagraph('0%', 'load-text');
  div.append(p);

  return div;
}

function deliveredMeals() {
  const div = createDiv('delivered-meals');

  div.appendChild(deliveredImgs());
  div.appendChild(deliveredText());

  return div;
}

function deliveredImgs() {
  const div = createDiv('delivered-meals-imgs');

  imgArray.forEach((url) => {
    div.appendChild(createImg(url, 'customer', 'customer-img'));
  });

  return div;
}

function deliveredText() {
  const p = document.createElement('p');
  p.classList.add('delivered-meals-text');
  p.innerHTML = `<span>250,000+ </span>meals delivered last year!`;

  return p;
}

function renderHighResImg() {
  const heroImg = document.querySelector('.hero-img');
  const loadText = document.querySelector('.load-text')

  // Replace src with data-src
  heroImg.src = heroImg.dataset.src;

  heroImg.addEventListener('load', () => {
    let load = 0;

    let int = setInterval(blurring, 30);

    function blurring() {
    load++;

    if (load > 99) {
    clearInterval(int);
    }

    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    heroImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }

    const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
  })
}

// refaktorisi ovaj kod
function loadHome() {
  const section = setSection('section-home');
  section.appendChild(createHome());
  renderHighResImg();
}

export default loadHome;