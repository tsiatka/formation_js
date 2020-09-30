'use strict';

console.log('URLS', urls);

document.addEventListener(
  'DOMContentLoaded',
  async function () {
    const ps = urls.map(fetchJson);

    let tweets = await Promise.all(ps);
    tweets = tweets.flat();

    console.log('Le tableau de tweet', tweets);

    const text = localStorage.getItem('monTexte');

    const displayedOl = createOl(tweets);
    const button = createFilterButton(tweets, displayedOl);
    const input = createInput(text);

    document.body.append(button);
    document.body.append(input);
    document.body.append(displayedOl);
  },
  { once: true },
);
