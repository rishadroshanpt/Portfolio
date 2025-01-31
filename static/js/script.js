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

  document.querySelector('.pro-card').addEventListener('click', function(event) {
    const des = this.querySelector('.pro-des');
    des.style.display = (des.style.display === 'none' || des.style.display === '') ? 'block' : 'none';
});

document.querySelector('.pro-card2').addEventListener('click', function(event) {
    const des = this.querySelector('.pro-des2');
    des.style.display = (des.style.display === 'none' || des.style.display === '') ? 'block' : 'none';
});
document.querySelector('.pro-card3').addEventListener('click', function(event) {
  const des = this.querySelector('.pro-des3');
  des.style.display = (des.style.display === 'none' || des.style.display === '') ? 'block' : 'none';
});

// document.querySelector('.pro-card').addEventListener('click', function(event) {
//     // Get the .des section inside the clicked card
//     const des = this.querySelector('.pro-des');
    
//     // Toggle the display style of .des between 'none' and 'block'
//     if (des.style.display === 'none' || des.style.display === '') {
//         des.style.display = 'block'; // Make the .des section visible
//     } else {
//         des.style.display = 'none'; // Hide the .des section
//     }
// });