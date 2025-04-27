// script.js
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-links a');
  const feedbackForm = document.getElementById('feedbackForm');
  
  // Scroll event listener
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
      
      // Highlight active section in navbar
      const fromTop = window.scrollY + 100;
      
      navLinks.forEach(link => {
          const section = document.querySelector(link.hash);
          
          if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
          ) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  });
  
  // Smooth scrolling for anchor links
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          window.scrollTo({
              top: targetSection.offsetTop - 80,
              behavior: 'smooth'
          });
      });
  });
  
  // Feedback form submission
  feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, you would send this to your server
      // For demo purposes, we'll just show an alert
      const formData = new FormData(feedbackForm);
      const feedbackData = {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
      };
      
      // This would be replaced with actual email sending code
      console.log('Feedback to be sent:', feedbackData);
      alert(`Thank you for your feedback, ${feedbackData.name}! We'll contact you at ${feedbackData.email}`);
      
      // Reset the form
      feedbackForm.reset();
  });
  
  // Initialize - check scroll position on load
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  }
});
