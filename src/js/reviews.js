document.addEventListener('DOMContentLoaded', function () {
  const reviewItems = document.querySelectorAll('.reviews-list-item');
  let currentIndex = 0;

  reviewItems[currentIndex].classList.add('active');

  reviewItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      reviewItems[currentIndex].classList.remove('active');

      currentIndex = (currentIndex + 1) % reviewItems.length;

      reviewItems[currentIndex].classList.add('active');
    });
  });
});
