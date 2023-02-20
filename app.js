const memeForm = document.querySelector('#memeForm');
const urlInput = document.querySelector('input[name="memeURL"]');
const topTextInput = document.querySelector('input[name="memeTopText"]');
const downTextInput = document.querySelector('input[name="memeDownText"]');
const outPut = document.querySelector('#memeOutput');
// const addMemeBtn = document.querySelector('#memeOutput');

function imageCreator(imgURL, text1, text2) {
  const memeDiv = document.createElement('div');
  const memePic = document.createElement('image');
  // const memeText = document.createElement('text');
  memePic.innerText = imgURL;
  // memeDiv.style.position = 'relative';
  // memePic.innerHTML = imgURL.value;
  memePic.innerText = text1;
  memePic.innerText = text2;
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
    downTextInput.value,
  );
  outPut.appendChild(newElemet);
});
