window.addEventListener('scroll', function() {
    var box = document.getElementById('animatedBox');
    var scrollPosition = window.scrollY;

    // Check if scrolling is done and up
    if (scrollPosition === 0) {
      box.style.animation = 'mymove 5s forwards';
    } else {
      box.style.animation = 'none'; // Reset animation if scrolling down or not at the top
    }
  });

