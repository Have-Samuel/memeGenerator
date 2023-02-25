const memeForm = document.querySelector('#memeForm');
const urlInput = document.querySelector('input[name="memeURL"]');
const topTextInput = document.querySelector('input[name="memeTopText"]');
const bottomTextInput = document.querySelector('input[name="memeBottomText"]');
const outPut = document.querySelector('#memeOutput');
// const addMemeBtn = document.querySelector('#memeOutput');

function imageCreator(imgURL, topText, bottomText) {
  const memeDiv = document.createElement('div');
  const memePic = document.createElement('image');
  // const memeText = document.createElement('text');
  memePic.innerText = imgURL;
  memeDiv.style.position = 'relative';
  memePic.innerHTML = imgURL.value;
  memePic.innerText = topText;
  memePic.innerText = bottomText;
  memePic.style.fontSize = '80px';
  memePic.style.borderRadius = '8px';
  memePic.style.color = 'magenta';
  memeDiv.appendChild(memePic);
  return memeDiv;
}

memeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newElemet = imageCreator(
    urlInput.value,
    topTextInput.value,
    bottomTextInput.value,
  );
  outPut.appendChild(newElemet);
});

// const imageUrlInput = document.querySelector('#imgUrlInput');
// const topTextInput = document.querySelector('#topTextInput');
// const bottomTextInput = document.querySelector('#bottomTextInput');
// const canvas = document.querySelector('#memeOutput');
// const addMemes = document.querySelector('type=["submit"]');

// let image;

// imageUrlInput.addEventListener('change', (e) => {
//   const imageDataUrl = URL.createObjectURL(e.target.URL);

//   console.log(imageDataUrl);
// });

// function updateMemeCavas(canvas, imgURL, topText, bottomText) {
//   console.log(canvas);
//   console.log(canvas);
//   console.log(top);
//   console.log(bottomText);
// }