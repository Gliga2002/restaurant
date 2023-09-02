import { createAnchor, createDiv, createHeadingSecondary } from "./general";



const meals = [{
  img:'assets/meals/meal-1.jpg',
  name:'Japanese Gyozas',
  category: ['vegetarian'],
  calories: 650,
  nutriScore: 74,
  averageRating: 4.9,
  reviewsNumber: 537
},
{
  img:'assets/meals/meal-2.jpg',
  name:'Avocado Salad',
  category: ['vegan','paleo'],
  calories: 400,
  nutriScore: 92,
  averageRating: 4.8,
  reviewsNumber: 441
},
{
  img:'assets/meals/meal--3.jpg',
  name:'Vegetable Salad',
  category: ['vegan'],
  calories: 350,
  nutriScore: 85,
  averageRating: 4.7,
  reviewsNumber: 360
},
{
  img:'assets/meals/meal--4.jpg',
  name:'Spread Steak',
  category: ['meat'],
  calories: 600,
  nutriScore: 98,
  averageRating: 4.4,
  reviewsNumber: 390
},
{
  img:'assets/meals/meal--5.jpg',
  name:'Rice with vegetables and meat',
  category: ['meat','vegetarian'],
  calories: 800,
  nutriScore: 57,
  averageRating: 4.4,
  reviewsNumber: 367
},
{
  img:'assets/meals/meal--6.jpg',
  name:'Chicken breast with vegetables',
  category: ['meat'],
  calories: 750,
  nutriScore: 34,
  averageRating: 4.6,
  reviewsNumber: 401
},
{
  img:'assets/meals/meal--7.jpg',
  name:'Vegetable salad',
  category: ['vegan'],
  calories: 400,
  nutriScore: 56,
  averageRating: 4.4,
  reviewsNumber: 251
},
{
  img:'assets/meals/meal--8.jpg',
  name:'Shrimps',
  category: ['sea-food'],
  calories: 364,
  nutriScore: 95,
  averageRating: 4.3,
  reviewsNumber: 402
}];


function createMenu() {
  const div = createDiv('menu', 'container');

  const headingSecondaryContent = 'Omnifood AI chooses from 5,000+ recipes'
  div.appendChild(createHeadingSecondary(headingSecondaryContent,'heading--secondary','center-text'));

  div.appendChild(createMealsDiv());

  div.appendChild(createAllRecipesLink());


  return div;
}




function createMealsDiv() {
  const div = createDiv('meals', 'grid','margin-bottom--lg');

  let mealContent = '';

  meals.forEach((meal) => {
    mealContent += createMealItem(meal);
  })

  div.innerHTML = mealContent;


  return div;
}


function createMealItem(meal) {
  return `
  <div class="meal">
    <img src=${meal.img} class='meal-img' alt=${meal.name} />
    <div class='meal-content'>
      <div class='meal-tags flex gap--sm margin-bottom--sm'>
        ${getMealTag(meal).join(' ')}
      </div>
      <p class='meal-title margin-bottom--md'>${meal.name}</p>
      <ul class='meal-attributes flex flex-column gap--sm'>
        <li class='meal-attribute flex gap--es'>
          <ion-icon class='icon' name="flame-outline"></ion-icon>
          <span><strong>${meal.calories}</strong> calories</span>
        </li>
        <li class='meal-attribute flex gap--es'>
          <ion-icon class='icon' name="restaurant-outline"></ion-icon>
          <span>NutriScore ® <strong>${meal.nutriScore}</strong></span>
        </li>
        <li class='meal-attribute flex gap--es'>
        <ion-icon class='icon' name="star-outline"></ion-icon>
        <span>
          <strong>${meal.averageRating}</strong> rating (${meal.reviewsNumber})
          
        </span>
        </li>
      </ul>
    </div>
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

function createAllRecipesLink() {
  const div = createDiv('meals-link', 'center-text');

  const anchorText = 'See all recipes →';
  div.appendChild(createAnchor(anchorText,'all-recipe'));

  return div;
  


}




function loadMenu() {
  const section = document.querySelector('section');
  section.setAttribute('class','');
  section.classList.add('section-menu');
  section.innerHTML = "";
  section.appendChild(createMenu());
}

export default loadMenu;