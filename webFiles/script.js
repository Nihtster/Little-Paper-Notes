const noResponses = [
  'Why :(',
  'pero ¿por qué',
  'Y no u love meh',
  "It took me a long time to write and figure this out and this is what you're response is?",
  'Babyyyy whyyyy',
  'Oh the humanityyyy',
  'My heart aches ahhhh',
  "You're so mean",
  'Why do you keep saying noo',
  'Stop going for the no button and just be my Valentine',
  'Rude >:(',
  '... no words',
];

const questionContainer = document.querySelector(
  '.question-container'
);
const buttonNo = document.querySelector('.button.no');

function handleYes() {
  window.location.href = "altPage.html";
}

function handleNo() {
  const buttonNo = document.querySelector('.button.no');

  // Change the question text to a random one from the array
  const noResponsesIndex = Math.floor(
    Math.random() * noResponses.length
  );
  questionContainer.querySelector('h1').textContent =
    noResponses[noResponsesIndex];

  // Relocate the "No" button
  const maxX = window.innerWidth - buttonNo.clientWidth;
  const maxY = window.innerHeight - buttonNo.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  buttonNo.style.position = 'absolute';
  buttonNo.style.left = `${randomX}px`;
  buttonNo.style.top = `${randomY}px`;
}

function resetButtonPositions(buttonNo) {
  buttonNo.style.position = '';
  buttonNo.style.left = '';
  buttonNo.style.top = '';
}
