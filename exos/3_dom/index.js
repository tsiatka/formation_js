'use strict';

// # 4_DOM

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];
const section1 = document.getElementById('exo1');

colors.forEach(function (color) {
    const maDiv = document.createElement('div');
    maDiv.textContent = color
    maDiv.style.backgroundColor = color;
    section1.append(maDiv)
    maDiv.addEventListener(
    'click',
    function () {
        console.log(color);
    }
  );
});



// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/

const section2 = document.createElement('section');
section2.setAttribute('id', 'exo2');
document.body.append(section2);

const squareDiv = document.createElement('div');
squareDiv.style.backgroundColor = 'black';
squareDiv.style.height = '50px';
squareDiv.style.width = '50px';
section2.append(squareDiv);

squareDiv.addEventListener(
    'mousemove',
    function (e) {
        squareDiv.style.height  = e.clientY +'px';
        squareDiv.style.width  = e.clientX +'px';
    }
);

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/
const section3 = document.createElement('section');
section3.setAttribute('id', 'exo3');
document.body.append(section3);

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const divPotter = document.createElement('div');
divPotter.textContent = names[0]
section3.append(divPotter);

function random(max){
    return Math.floor(Math.random() * max);
}

divPotter.addEventListener(
    'click',
    function () {
        divPotter.remove();
        divPotter.textContent = names[random(names.length)]
        section3.append(divPotter);
    }
);

// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

const section4 = document.createElement('section');
section4.setAttribute('id', 'exo4');
document.body.append(section4);


const button = document.createElement('button');
button.textContent = 'Track';
section4.append(button);
  
function mousePos(e) {
    console.log('Y', e.clientY, 'X', e.clientX)
}

let isTracking = true;

button.addEventListener(
    'click',
    function track(){
        if (isTracking) {
            window.addEventListener(
                'mousemove',
                mousePos
            )
        }
        else {
            window.removeEventListener(
                'mousemove',
                mousePos
            )
        }
        isTracking = !isTracking;
    }
);



// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/
const section5 = document.createElement('section');
section5.setAttribute('id', 'exo5');
document.body.append(section5);

const dragDiv = document.createElement('div');
dragDiv.textContent = "Drag me";
dragDiv.style.backgroundColor = 'green';
dragDiv.style.height = '50px';
dragDiv.style.left = "0px";
dragDiv.style.top = "0px";

section5.append(dragDiv);


dragDiv.addEventListener('mousedown', mouseDown);
dragDiv.addEventListener('mouseup', mouseUp);

function mouseUp() {
    window.removeEventListener('mousemove', move);
}

function mouseDown() {
    dragDiv.style.position = 'absolute';
    window.addEventListener('mousemove', move);
}

function move(e) {
    dragDiv.style.top = e.clientY + 'px';
    dragDiv.style.left = e.clientX + 'px';
};
