// const sections = document.querySelectorAll("section[id].content");

// function scrollTracker(){
//     const currentYScroll = window.scrollY;
//     sections.forEach((section)=>{
//         const sectionHeight = section.offsetHeight;
//         const sectionTop = section.offsetTop - 100;
//         const id = section.getAttribute("id");
//         const currentNavLink=document.querySelector('.navbar a[href*="#${id}"]');
//         if(
//             currentYScroll > sectionTop &&
//             currentYScroll <= sectionTop + sectionHeight
//         ){
//             currentNavLink.classList.add("active");
//         }else{
//             currentNavLink.classList.remove("active");
//         }
//     });

// }
// window.addEventListener("scroll",scrollTracker);

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');
  
    // Add active class to the clicked nav item
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
      });
    });
  
    // Scroll event to update active class based on scroll position
    window.addEventListener('scroll', function () {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
  
      // Update active class based on the section in view
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active');
        }
      });
    });
  });



// Function to check if an element is in the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once the element is visible
      }
  });
}, {
  threshold: 0.1  // Trigger when 10% of the element is visible
});

// Targeting all elements with the 'content' or 'img' class
document.querySelectorAll('.content, img').forEach(element => {
  observer.observe(element);
});
