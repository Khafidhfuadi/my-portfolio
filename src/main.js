   // Initialize SimpleBar
   new SimpleBar(document.body);

   // Get all nav-link elements
   const navLinks = document.querySelectorAll('.nav-link');

   // Add click event listener to each nav-link
   navLinks.forEach(navLink => {
     navLink.addEventListener('click', function (event) {
       event.preventDefault(); // Prevent default anchor click behavior

       // Remove 'active' class from all nav-links
       navLinks.forEach(link => {
         link.classList.remove('active');
       });

       // Add 'active' class to the clicked nav-link
       this.classList.add('active');

       // Get the target section ID from href attribute
       const targetId = this.getAttribute('href');

       // Scroll to the target section smoothly
       document.querySelector(targetId).scrollIntoView({
         behavior: 'smooth'
       });
     });
   });

     // JavaScript to trigger fade-up animation on scroll
     function checkFadeUp() {
      var elements = document.querySelectorAll('.fade-up');

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.5;

        if (position < screenPosition) {
          element.classList.add('fade-up-show');
        } else {
          element.classList.remove('fade-up-show');
        }
      }
    }
    window.addEventListener('scroll', checkFadeUp);
    window.addEventListener('resize', checkFadeUp);
    document.addEventListener('DOMContentLoaded', checkFadeUp);