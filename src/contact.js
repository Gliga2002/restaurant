import { createDiv, createHeadingTertiary, createSpan} from "./general";

function createContact() {
 const div =  createDiv('contact');

 div.appendChild(createContactContainer());

 return div;
}


function createContactContainer() {
  const div = createDiv('contact-container');
  div.appendChild(createContactContainerInfo());
  div.appendChild(createContactContainerMap());

  return div;
}

function createContactContainerInfo() {
  const div = createDiv('contact-container--info');

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
  <ion-icon name="location-outline"></ion-icon>
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
  <ion-icon name="time-outline"></ion-icon>
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
  <ion-icon name="call-outline"></ion-icon>
  '(222)-888 5555'
  `

  div.appendChild(p);

  return div;
}

function createContactForm() {
  const form = document.createElement('form');
  
 form.appendChild(createHeadingTertiary(`<ion-icon name="mail-outline"></ion-icon>
 Message Us
 `));

 form.appendChild(createInputBox('Full Name'))
 form.appendChild(createInputBox('Email'))
 form.appendChild(createInputBox('Type your message...'))


return form;

}

function createInputBox(placeholder) {
  const div = createDiv('input-box');

  div.appendChild(createInput());
  div.appendChild(createSpan(placeholder))
  

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

  return div;
}











function loadContact() {
  const section = document.querySelector('section');
  section.innerHTML = "";
  section.appendChild(createContact());
}

export default loadContact;