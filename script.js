// Page navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-icon');
    const navLogo = document.querySelector('.nav-logo');
    const pageSections = document.querySelectorAll('.page-section');
    
    // Function to switch pages
    function switchPage(targetPage) {
        // Remove active class from all navigation links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        
        // Add active class to clicked link
        const activeLink = document.querySelector(`[data-page="${targetPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Hide all page sections
        pageSections.forEach(section => section.classList.remove('active'));
        
        // Show target page section
        const targetSection = document.getElementById(targetPage);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Save current page to localStorage
        localStorage.setItem('currentPage', targetPage);
    }
    
    // Navigation links click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            switchPage(targetPage);
        });
    });
    
    // Logo click handler
    navLogo.addEventListener('click', function(e) {
        e.preventDefault();
        switchPage('home');
    });
    
    // Check for saved page on load
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage && savedPage !== 'home') {
        switchPage(savedPage);
    }
    
    // Add active state to navigation on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(21, 21, 21, 0.98)';
        } else {
            navbar.style.background = 'rgba(21, 21, 21, 0.95)';
        }
    });


    
    
    // Add hover effect to main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        mainTitle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }




  // Get the button
  let goTopBtn = document.getElementById("goTopBtn");

  // Show button when user scrolls down 100px
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  };

  // Scroll to top when clicked
  goTopBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };




}); 