// 'use strict';

// # 2-1_Syntax

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre

const x = 4;

console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()
console.log('X', x);

const undefined = 1;

console.log(undefined);

console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x.
*/
function x10(n) {
  return n * 10;
}

console.log('X10', x10(x));

console.log('--- Question 4 ---');
/* [3] créer une fonction random qui en entrée prend un nombre et renvoie un nombre entier aléatoire
entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
Logguer le résultat de la fonction random appliquée sur x.
( Utiliser Math.random() et Math.floor() )
*/

function random(n) {
  return Math.floor(Math.random() * n);
}

console.log('Random', random(x));

console.log('--- Question 5 ---');
/* [4] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];

nombres.forEach(function (nombre) {
  console.log(nombre);
});

console.log('--- Question 6 ---');
/* [5] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

const pairs = nombres.filter(function (nombre) {
  return nombre % 2 === 0;
});

console.log('PAIRS', pairs);

console.log('--- Question 7 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/

const grands = nombres.filter(function (nombre) {
  return nombre > 100;
});

console.log('GRANDS', grands);

console.log('--- Question 8 ---');
/* [7] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/

const nombresX10 = nombres.map(x10);

console.log('X10', nombresX10);

console.log('--- Question 9 ---');
/* [8] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];

couleurs.forEach(function (couleur) {
  console.log('La couleur', couleur, 'a', couleur.length, 'lettres');
});

console.log('--- Question 10 ---');
/* [9] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/

const longueurs = couleurs.map(longueur);

console.log('Longueurs', longueurs);

console.log('--- Question 11 ---');
// [10] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string

function longueur(string) {
  return string.length;
}

console.log('--- Question 12 ---');
// [11] reprendre le code de la question 9 mais en utilisant la fonction "longueur"

console.log('--- Question 13 ---');
// [12] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [
  {
    nom: 'Romain',
    date: '1985-12-31',
  },
];

personnes.push(
  {
    nom: 'Pierre',
    date: '1954-10-12',
  },
  {
    nom: 'Fanny',
    date: '1984-03-03',
  },
  {
    nom: 'François',
    date: '1991-04-03',
  },
);

console.log('Personnes', personnes);

console.log('--- Question 14 ---');
// [13] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()

const noms = personnes.map(function (personne) {
  return personne.nom;
});

console.log('Nom', noms);

console.log('--- Question 15 ---');
/* [14] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/

function calculerAge(date) {
  // const now = Date.now();

  const msToYear = 1000 * 60 * 60 * 24 * 365.25;

  const now = new Date().getTime();

  const birth = new Date(date).getTime();

  return Math.floor((now - birth) / msToYear);
}

console.log('Date', calculerAge('1985-12-31'));

console.log('--- Question 16 ---');
// [15] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges

const ages = personnes.map(function (personne) {
  return calculerAge(personne.date);
});

console.log('Ages', ages);
