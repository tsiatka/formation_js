'use strict';

// # 4_DOM

/*
  Pense-bête DOM
  // accéder au <body>
  document.body

  // créer un nouvel élément 'div'
  const x = document.createElement('div');

  // rajouter un enfant
  parentEl.append(enfantEl);

  // ajouter un texte à un élément
  element.textContent = 'le texte yo !';

  // échanger des éléments
  element1.replaceWith(element2);

  // ajouter un listener à un élément
  element.addEventListener('click', function(e) {
    ...
  })
*/

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];

const section1 = document.getElementById('exo1');

function makeColorDiv(color) {
  const div = document.createElement('div');

  div.textContent = color;

  div.classList.add('color');
  div.style.background = color;

  div.addEventListener('click', function () {
    console.log('Color', color);
  });

  return div;
}

colors.map(makeColorDiv).forEach(function (div) {
  section1.append(div);
});

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/

const section2 = document.createElement('section');
section2.id = 'exo2';
document.body.append(section2);

const carre = document.createElement('div');
carre.classList.add('carre');

section2.append(carre);

carre.addEventListener('mousemove', function (event) {
  carre.style.height = event.clientY / 2 + 'px';
  carre.style.width = event.clientX / 2 + 'px';
});

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

function random(n) {
  return Math.floor(Math.random() * n);
}

const section3 = document.createElement('section');
section3.id = 'exo3';
document.body.append(section3);

function createPerson(oldP) {
  const i = !oldP ? 0 : random(names.length);
  const name = names[i];

  const newPerson = document.createElement('div');
  newPerson.classList.add('harry');
  newPerson.textContent = name;

  newPerson.addEventListener('click', function () {
    createPerson(newPerson);
  });

  if (!oldP) {
    section3.append(newPerson);
  } else {
    oldP.replaceWith(newPerson);
  }
  return newPerson;
}

createPerson();
// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

const section4 = document.createElement('section');
section4.id = 'exo4';
document.body.append(section4);

const button = document.createElement('button');
button.textContent = 'Track';
section4.append(button);

let isTracking = false;

function track(e) {
  console.log('X', e.clientX, 'Y', e.clientY);
}

button.addEventListener('click', function () {
  isTracking = !isTracking;
  console.log('Coucou', isTracking);

  if (isTracking) {
    window.addEventListener('mousemove', track);
  } else {
    window.removeEventListener('mousemove', track);
  }
});

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/
