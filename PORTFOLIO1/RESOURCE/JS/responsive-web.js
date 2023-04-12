window.addEventListener('scroll', () => {
  const images = document.querySelectorAll('.animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom');

  images.forEach(image => {
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (imagePosition < screenPosition) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
});
