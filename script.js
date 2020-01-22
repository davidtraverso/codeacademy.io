// Hello hacker!
'use strict';

// Add to sessionStorage
var visited = sessionStorage.getItem('visited');

var fadeNodes = document.querySelectorAll('*.ctn-fd');
var counter = 0;
// Fade in node items
var fadeIn = window.setInterval(() => {
  if (!visited) {
    if (counter == fadeNodes.length) {
      clearInterval(fadeIn);
      sessionStorage.setItem('visited', true);
    }
    fadeNodes[counter].classList.add('ctn');
    counter++;
  } else if (visited) {
  fadeNodes.forEach(node => {
    node.classList.remove('ctn-fd');
  });}
}, 500);

// Subscribe & Un- to mouseover cards:
var cards = document.querySelectorAll('div.card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('cardFocus');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('cardFocus');
  });
});

var wrapper = document.querySelector('article.cardWrap');
// Listen for mouseleave then unblur cards:
wrapper.addEventListener('mouseleave', () => {
  cards.forEach(card => {
    card.classList.remove('cardFade');
  });
});

// Listen for mouseover then blur nonactive cards:
wrapper.addEventListener('mouseover', () => {
  cards.forEach(card => {
    card.classList.contains('cardFocus') ? card.classList.remove('cardFade') : card.classList.add('cardFade');
  });
});
