const likeButton = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-count'); 
const fillButton = document.querySelector('.room__reviews-like-icon');
likeButton.addEventListener('click', () => {
fillButton.style.fill = '#BC9CFF';
const currentCount = parseInt(likeCount.textContent, 10);
likeCount.textContent = currentCount + 1;
});
const likeButton_two = document.querySelector('.like-button-2');
const likeCount_two = document.querySelector('.like-count-2'); 
const fillButton_two = document.querySelector('.room__reviews-like-icon-2');
likeButton_two.addEventListener('click', () => {
fillButton_two.style.fill = '#BC9CFF';
const currentCount = parseInt(likeCount_two.textContent, 10);
likeCount_two.textContent = currentCount + 1;
});