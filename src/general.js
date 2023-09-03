
export function createImg(url, imgName, clas) {

  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', imgName);
  img.classList.add(clas)
  return img;
}

export function createHeadingPrimary(content, ...classes) {
  const h1 = document.createElement('h1');
  h1.innerHTML = content
  h1.classList.add(...classes);

  return h1;
}

export function createHeadingSecondary(content, ...classes) {
  const h2 = document.createElement('h2');
  h2.innerHTML = content
  h2.classList.add(...classes);

  return h2;
}

export function createHeadingTertiary(content, ...classes) {
  const h3 = document.createElement('h2');
  h3.innerHTML = content
  h3.classList.add('heading--tertiary', ...classes);

  return h3;
}

export function createParagraph(content, ...classes) {
  const p = document.createElement('p');
  p.textContent = content;
  p.classList.add(...classes);

  return p;
}

export function createButton(name, ...classes) {
  const button = document.createElement('button');
  button.textContent = name;
  button.classList.add(...classes);

  return button;
}

export function createAnchor(content, ...classes) {
  const a = document.createElement('a');
  a.textContent = content;
  a.classList.add(...classes);
  a.setAttribute('href','#');

  return a;
}

export function createDiv(...classes) {
  const div = document.createElement('div');
  div.classList.add(...classes);


  return div;
}

export function createSpan(content,...classes) {
  const span = document.createElement('span');
  span.textContent = content;
  span.classList.add(...classes);

  return span;
}

export function setSection(sectionName) {
  const section = document.querySelector('section');
  section.setAttribute('class','');
  section.classList.add(sectionName);
  section.innerHTML = "";

  return section;
}




