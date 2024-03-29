const memeForm = document.querySelector('#memeForm');
const urlInput = document.querySelector('input[name="memeURL"]');
const topTextInput = document.querySelector('input[name="memeTopText"]');
const bottomTextInput = document.querySelector('input[name="memeBottomText"]');
const memeDisplay = document.querySelector('#memeOutput');

const memeGenetator = () => {
  const memeURL = urlInput.value;
  const topText = topTextInput.value;
  const bottomText = bottomTextInput.value;

  const memeDiv = document.createElement('div');
  memeDiv.classList = 'memeDiv';

  const memeImage = document.createElement('img');

  memeImage.src = memeURL;
  memeImage.classList.add('memeImg');
  memeImage.alt = 'Meme Image';

  const memeTopText = document.createElement('h2');
  memeTopText.innerHTML += `<span class="top">${topText}</span>`;
  memeTopText.classList.add('top');
  memeTopText.innerText = topText;

  const memeBottomText = document.createElement('h2');
  memeBottomText.classList.add('bottom');
  memeBottomText.innerText = bottomText;
  // memeDisplay.reset();
  memeDiv.append(memeImage, memeTopText, memeBottomText);
  memeDisplay.appendChild(memeDiv);

  // Delete the meme
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '';
  deleteButton.classList.add('deleteButton');

  // X to delete the meme
  const xDelete = document.createElement('span');
  xDelete.classList.add('xDelete');
  xDelete.innerText = 'X';
  deleteButton.appendChild(xDelete);

  memeDiv.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    memeDiv.remove();
  });

  //  Reset the form
  memeForm.reset();
};

memeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // // Generate one meme at a time
  if (memeDisplay.children.length > 0) {
    memeDisplay.removeChild(memeDisplay.children[0]);
  }

  memeGenetator();
});
