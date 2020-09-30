'use strict';

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
