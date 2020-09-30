'use strict';

function checkFr(tweet) {
  return tweet.lang === 'fr';
}

function fetchJson(url) {
  return fetch(url).then(function (resp) {
    return resp.json();
  });
}
