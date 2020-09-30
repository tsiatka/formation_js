'use strict';

// # 5_Asynchrone

/* Exercice 1: Random number
    - Vous avez accès à une fonction createRandomNumber() qui crée une Promesse
    d'avoir un nombre aléatoire en 0 et 100.
    - Utiliser cette fonction pour récupérer le nombre
    - Si ce nombre est plus grand que 50, afficher "Cool !"
    - Sinon, afficher "Pas cool..."
*/

// Avec .then()

// createRandomNumber().then(function (number) {
//   if (number > 50) console.log('Cool', number);
//   else console.log('Pas cool', number);
// });

// // Avec async / await

// async function displayNumber() {
//   const number = await createRandomNumber();

//   if (number > 50) console.log('Cool', number);
//   else console.log('Pas cool', number);
// }

// displayNumber();

/* Exercice 2: Temps d'attente
    - Vous avez accès à une fonction waitForNumber()
    qui crée une Promesse d'attendre un certain temps.
    - Si ce temps est trop long, la Promesse est rejetée,
    sinon elle est résolue avec le temps d'attente.
    - Utiliser cette fonction pour afficher le temps d'attente
    lorsque la Promesse est résolue.
    - Tant que la Promesse est rejetée, recommencez
    - Essayer de trouver quel est le temps d'attente maximal
*/

// Avec .then()

function updateDivs() {
  maxDiv.textContent = 'Max ' + tempMax + 'ms';
  progress.textContent = done + '/' + ps.length;
}

function guessNumber() {
  return waitForNumber()
    .then(function (time) {
      console.log('TIME', time);
      tempMax = Math.max(tempMax, time);
      done++;
      updateDivs();
      return time;
    })
    .catch(function (error) {
      console.log('ERROR', error);
      return guessNumber();
    });
}

const ps = [...Array(500).keys()].map(() => guessNumber());

Promise.all(ps).then(function (allValues) {
  const max = Math.max(...allValues);
  div.textContent = 'Done';
  console.log('max', max);
});

let tempMax = 0;
let done = 0;

const div = document.createElement('div');
div.textContent = 'Waiting...';
const progress = document.createElement('div');
const maxDiv = document.createElement('div');

updateDivs();

document.body.append(div);
document.body.append(progress);
document.body.append(maxDiv);

/* Exercice 3: Charger des tweets
    - Vous avez accès à une URL qui contient des tweets.
    - Charger et logguer les tweets en utilisant fetch()
*/

const url =
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';
