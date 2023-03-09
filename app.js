const memeForm = document.querySelector('#memeForm');
const urlInput = document.querySelector('input[name="memeURL"]');
const topTextInput = document.querySelector('input[name="memeTopText"]');
const bottomTextInput = document.querySelector('input[name="memeBottomText"]');
const memeDisplay = document.querySelector('#memeOutput');
const addMemeBtn = document.querySelector('#memeOutput');

let src = memeDisplay.getAttribute('src');
src = 'https://i.imgflip.com/1bij.jpg';
urlInput.setAttribute('src', src);

memeDisplay.setAttribute('src', src);
memeDisplay.classList = 'memeImg';

memeForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
