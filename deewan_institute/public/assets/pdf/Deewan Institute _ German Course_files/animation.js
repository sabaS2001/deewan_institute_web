document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  // Add class when in view
      } else {
        // Optional: Remove class when out of view (for re-triggering on scroll up/down)
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.01  // Trigger when 10% of the section is visible (adjust for earlier/later trigger)
  });
  sections.forEach(section => {
    observer.observe(section);  // Watch each section
  });
});

// Mail Icon
document.addEventListener('DOMContentLoaded', function () {
  const mailImg = document.querySelector('#mail img');
  const originalSrc = mailImg.src; // Store the default image path
  const hoverSrc = '../assets/images/icons/mailWhite.png'; // Path to the white icon

  const mailImg2 = document.querySelector('#mail2 img');
  const originalSrc4 = mailImg2.src; // Store the default image path
  const hoverSrc4 = '../assets/images/icons/mailWhite.png'; // Path to the white icon

  const mailImg3 = document.querySelector('#mail3 img');
  const originalSrc5 = mailImg3.src; // Store the default image path
  const hoverSrc5 = '../assets/images/icons/mailWhite.png'; // Path to the white icon

  const phoneImg = document.querySelector('#phone img');
  const originalSrc2 = phoneImg.src; // Store the default image path
  const hoverSrc2 = '../assets/images/icons/phoneWhite.png'; // Path to the white icon

  const whatsAppImg = document.querySelector('#whatsapp img');
  const originalSrc3 = whatsAppImg.src; // Store the default image path
  const hoverSrc3 = '../assets/images/icons/whatsappWhite.png'; // Path to the white icon

  // On hover, change to white icon
  document.getElementById('mail').addEventListener('mouseenter', function () {
    mailImg.src = hoverSrc;
  });

  // On mouse leave, revert to original icon
  document.getElementById('mail').addEventListener('mouseleave', function () {
    mailImg.src = originalSrc;
  });

  // On hover, change to white icon
  document.getElementById('phone').addEventListener('mouseenter', function () {
    phoneImg.src = hoverSrc2;
  });

  // On mouse leave, revert to original icon
  document.getElementById('phone').addEventListener('mouseleave', function () {
    phoneImg.src = originalSrc2;
  });

  // On hover, change to white icon
  document.getElementById('whatsapp').addEventListener('mouseenter', function () {
    whatsAppImg.src = hoverSrc3;
  });

  // On mouse leave, revert to original icon
  document.getElementById('whatsapp').addEventListener('mouseleave', function () {
    whatsAppImg.src = originalSrc3;
  });

  // On hover, change to white icon
  document.getElementById('mail2').addEventListener('mouseenter', function () {
    mailImg2.src = hoverSrc4;
  });

  // On mouse leave, revert to original icon
  document.getElementById('mail2').addEventListener('mouseleave', function () {
    mailImg2.src = originalSrc4;
  });

  // On hover, change to white icon
  document.getElementById('mail3').addEventListener('mouseenter', function () {
    mailImg3.src = hoverSrc5;
  });

  // On mouse leave, revert to original icon
  document.getElementById('mail3').addEventListener('mouseleave', function () {
    mailImg3.src = originalSrc5;
  });
});


