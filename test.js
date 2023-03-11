/* eslint-disable prefer-destructuring */
const memeForm = document.querySelector('#memeForm');
const urlInput = document.querySelector('input[name="memeURL"]');
const topTextInput = document.querySelector('input[name="memeTopText"]');
const bottomTextInput = document.querySelector('input[name="memeBottomText"]');
const memeDisplay = document.querySelector('#memeOutput');

let image;

const memeGenetator = (memeDisplay, image, topText, bottomText) => {
  const ctx = memeDisplay.getContext('2d');
  const width = image.width;
  const height = image.height;
  const yOffset = height / 25;
  const fontSize = Math.floor(height / 10);

  // update the display
  memeDisplay.width = width;
  memeDisplay.height = height;
  ctx.drawImage(image, 0, 0);

  // Style Text
  ctx.font = `${fontSize}px impact`;
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineJoin = 'round';
  ctx.lineWidth = Math.floor(fontSize / 4);

  // Update top text
  ctx.textBaseline = 'top';
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Update Bottom Text
  ctx.textBaseline = 'bottom';
  ctx.strokeText(bottomText, width / 2, yOffset);
  ctx.fillText(bottomText, width / 2, yOffset);
};

urlInput.addEventListener('change', () => {
  const imageDataUrl = URL.createObjectURL(urlInput.value);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener('load', () => {
    memeGenetator(memeDisplay, image, topTextInput.value, bottomTextInput.value);
  });
  // image.onload = () => {
  //   memeGenetator(memeDisplay, image, topTextInput.value, bottomTextInput.value);
  // };
});

topTextInput.addEventListener('input', () => {
  memeGenetator(memeDisplay, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener('input', () => {
  memeGenetator(memeDisplay, image, topTextInput.value, bottomTextInput.value);
});

// const memeURL = urlInput.value;
// const topText = topTextInput.value;
// const bottomText = bottomTextInput.value;

// const memeDiv = document.createElement('div');
// memeDiv.classList = 'memeDiv';

// const memeImage = document.createElement('img');

// memeImage.src = memeURL;
// memeImage.classList.add('memeImg');
// memeImage.alt = 'Meme Image';

// //  Reset the form
// memeForm.reset();

// const memeTopText = document.createElement('h2');
// memeTopText.innerHTML += `<span class="top">${topText}</span>`;
// memeTopText.classList.add('top');
// memeTopText.innerText = topText;

// const memeBottomText = document.createElement('h2');
// memeBottomText.classList.add('bottom');
// memeBottomText.innerText = bottomText;

// memeDiv.append(memeImage, memeTopText, memeBottomText);
// memeDisplay.appendChild(memeDiv);

// memeForm.reset();

memeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  memeGenetator();
});
