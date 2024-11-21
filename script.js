const button = document.querySelector('.read-more-button');
const paragraphToReveal = document.querySelector(
  '.web3-paragraph-hidden'
);

button.addEventListener('click', () => {
  paragraphToReveal.style.display = 'block';
});
