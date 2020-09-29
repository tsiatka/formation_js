'use strict';

function checkFr(tweet) {
  return tweet.lang === 'fr';
}

function createLi(tweet) {
  const li = document.createElement('li');
  li.textContent = tweet.full_text;

  return li;
}

function createOl(tweets) {
  const ol = document.createElement('ol');

  tweets.map(createLi).forEach(function (li) {
    ol.append(li);
  });

  return ol;
}

function createFilterButton(tweets, ol) {
  const button = document.createElement('button');
  button.textContent = 'To Fr';

  let isFr = false;
  button.addEventListener('click', function () {
    isFr = !isFr;
    const displayedTweets = isFr ? tweets.filter(checkFr) : tweets;

    const newOl = createOl(displayedTweets);
    ol.replaceWith(newOl);
    ol = newOl;

    button.textContent = isFr ? 'To All' : 'To Fr';
  });

  return button;
}

document.addEventListener(
  'DOMContentLoaded',
  async function () {
    const resp = await fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    );
    const tweets = await resp.json();
    console.log('Le tableau de tweet', tweets);

    const displayedOl = createOl(tweets);
    const button = createFilterButton(tweets, displayedOl);

    document.body.append(button);
    document.body.append(displayedOl);
  },
  { once: true },
);
