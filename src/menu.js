import { createAnchor, createDiv, createHeadingSecondary } from "./general";



const meals = [{
  img:'assets/meals/meal-1.jpg',
  name:'Japanese Gyozas',
  category: ['vegetarian'],
  calories: 650,
  nutriScore: 74,
  averageRating: 4.9,
  reviewsNumbe: 537
},
{
  img:'assets/meals/meal-2.jpg',
  name:'Avocado Salad',
  category: ['vegen','paleo'],
  calories: 400,
  nutriScore: 92,
  averageRating: 4.8,
  reviewsNumbe: 441
},
{
  img:'assets/meals/meal-3.jpg',
  name:'Vegetable Salad',
  category: ['vegen'],
  calories: 350,
  nutriScore: 85,
  averageRating: 4.7,
  reviewsNumbe: 360
},
{
  img:'assets/meals/meal-4.jpg',
  name:'Spread Steak',
  category: ['meat'],
  calories: 600,
  nutriScore: 98,
  averageRating: 4.4,
  reviewsNumbe: 390
},
{
  img:'assets/meals/meal-5.jpg',
  name:'Rice with vegetables and meat',
  category: ['meat','vegetable'],
  calories: 800,
  nutriScore: 57,
  averageRating: 4.4,
  reviewsNumbe: 367
},
{
  img:'assets/meals/meal-6.jpg',
  name:'Chicken breast with vegetables',
  category: ['meat'],
  calories: 750,
  nutriScore: 34,
  averageRating: 4.6,
  reviewsNumbe: 401
},
{
  img:'assets/meals/meal-7.jpg',
  name:'Vegetable salad',
  category: ['vegan'],
  calories: 400,
  nutriScore: 56,
  averageRating: 4.4,
  reviewsNumbe: 251
},
{
  img:'assets/meals/meal-8.jpg',
  name:'Shrimps',
  category: ['sea-food'],
  calories: 364,
  nutriScore: 95,
  averageRating: 4.3,
  reviewsNumbe: 402
}];


function createMenu() {
  const div = document.createElement('div');
  div.classList.add('menu');

  div.appendChild(createHeadingSecondary('Omnifood AI chooses from 5,000+ recipes'));

  div.appendChild(createMenuDiv());


  div.appendChild(createAnchor('See all recipes →'));

  return div;
}


function createMenuDiv() {
  const div = createDiv('container', 'grid', 'grid--3-cols', 'margin-bottom-md');

  div.appendChild(createMealDiv());


  return div;
}

function createMealDiv() {
  const div = createDiv('meal');

  let mealContent = '';

  meals.forEach((meal) => {
    mealContent += createMealItem(meal)
  })

  div.innerHTML = mealContent;

  

  return div;
}

function createMealItem(meal) {
  return `
  <img src=${meal.img} class='meal-img' alt=${meal.name} />
  <div class='meal-content'>
    <div class='meal-tags'>
      ${getMealTag(meal).join(' ')}
    </div>
    <p class='meal-title'>${meal.name}</p>
    <ul class='meal-attributes'>
      <li class='meal-attribute'>
        <ion-icon name="flame-outline"></ion-icon>
        <span>${meal.calories}</span>
      </li>
      <li class='meal-attribute'>
        <ion-icon name="restaurant-outline"></ion-icon>
        <span>${meal.nutriScore}</span>
      </li>
      <li class='meal-attribute'>
      <ion-icon name="star-outline"></ion-icon>
      <span>
        ${meal.averageRating}
        ${(meal.reviewsNumbe)}
      </span>
      </li>
    </ul>
  </div>
`
}

function getMealTag(meal) {
  let mealTagsArrayEl;
  console.log(meal.category);
  mealTagsArrayEl = meal.category.map((item) => {
    return  `<span class='tag tag--${item}'>${item}</span>`
  })

  return mealTagsArrayEl;
}




function loadMenu() {
  const section = document.querySelector('section');
  section.innerHTML = "";
  section.appendChild(createMenu());
}

export default loadMenu;