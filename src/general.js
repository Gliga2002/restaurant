
export function createImg(url, imgName, classes) {
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', imgName);
  img.classList.add(...classes)
  return img;
}

export function createHeadingPrimary(content, ...classes) {
  const h1 = document.createElement('h1');
  h1.textContent = content
  h1.classList.add('heading--primary', ...classes);

  return h1;
}

export function createHeadingSecondary(content, ...classes) {
  const h1 = document.createElement('h1');
  h1.textContent = content
  h1.classList.add('heading--secondary', ...classes);

  return h1;
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




