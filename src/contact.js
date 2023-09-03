import { createButton, createDiv, createHeadingTertiary, createSpan} from "./general";
import L from "leaflet";


function createContact() {
 const div =  createDiv('contact','container', 'grid');

 div.appendChild(createContactContainerInfo());

 div.appendChild(createContactContainerMap());


 return div;
}



function createContactContainerInfo() {
  const div = createDiv('contact-container--info','flex', 'flex-column','gap--sm','font-size--sm');

  div.appendChild(createAddress())

  div.appendChild(createHours())

  div.appendChild(createPhone())

  div.appendChild(createContactForm())

  return div;
}

function createAddress() {
  const div  = createDiv('address');

  const p = document.createElement('p');
  p.innerHTML = `
  <ion-icon class="icon margin-right--es" name="location-outline"></ion-icon>
  1024 Oakwood Ave
  <br />
  San Diego, CA 22434
  `
  div.appendChild(p);

  return div;
}

function createHours() {
  const div  = createDiv('hours');

  const p = document.createElement('p');
  p.innerHTML = `
  <ion-icon  class="icon margin-right--es" name="time-outline"></ion-icon>
  <span>Mon-Thurs:</span>
  '8-am-8pm'
  <br />
  <span>Fri-Sun:</span>
  '8am-11pm '
  `
  div.appendChild(p);

  return div;
}

function createPhone() {
  const div = createDiv('phone');

  const p = document.createElement('p');
  p.innerHTML = `
  <ion-icon class="icon margin-right--es" name="call-outline"></ion-icon>
  '(222)-888 5555'
  `

  div.appendChild(p);

  return div;
}

function createContactForm() {
  const form = document.createElement('form');
  form.classList.add('flex', 'flex-column');
  
 const headingTertiaryContent = `<ion-icon class="icon margin-right--es"name="mail-outline"></ion-icon>
 Message Us `;
 form.appendChild(createHeadingTertiary(headingTertiaryContent,'flex','flex-center--vert','margin-bottom--md'));

 form.appendChild(createInputBox('Full Name'))
 form.appendChild(createInputBox('Email'))
 form.appendChild(createInputBox('Type your message...'))

 form.appendChild(createButton('Send','btn','btn-form'))
 

 let _prevClickedSpan;

 form.addEventListener('click',(e) => {
  const inputBoxEl = e.target.closest('.input-box');

  console.log(_prevClickedSpan);
  if(!inputBoxEl) {
    if(_prevClickedSpan) _prevClickedSpan.classList.remove('clicked');

    return;
  }

  if(_prevClickedSpan) _prevClickedSpan.classList.remove('clicked');

  let spanEl = inputBoxEl.lastChild;

  spanEl.classList.add('clicked');
  _prevClickedSpan = spanEl;
  console.log(_prevClickedSpan);

  inputBoxEl.firstChild.focus();
 })

return form;
}


function createInputBox(placeholder) {
  const div = createDiv('input-box');

  div.appendChild(createInput());

  const span = createSpan(placeholder)
  span.classList.add('placeholder')
  div.appendChild(span)
  

  return div;
  


}

function createInput() {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('required', '');

  return input;
}













function createContactContainerMap() {
  const div = createDiv('contact-container--map');
  div.setAttribute('id', 'map');



  return div;
}


function initLeaflet() {
  var map = L.map('map').setView([32.8245525, -117.1089785], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([32.8245525, -117.1089785]).addTo(map)
    .bindPopup('We are here')
    .openPopup();
}










function loadContact() {
  const section = document.querySelector('section');
  section.setAttribute('class','');
  section.classList.add('section-contact');
  section.innerHTML = "";
  section.appendChild(createContact());
  initLeaflet();

}

export default loadContact;