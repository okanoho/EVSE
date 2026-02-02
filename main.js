import './style.css'

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
allNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  });
});

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    company: document.getElementById('company').value,
    projectType: document.getElementById('project-type').value,
    message: document.getElementById('message').value,
    timestamp: new Date().toISOString()
  };

  formMessage.classList.remove('hidden');
  formMessage.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-300');
  formMessage.textContent = 'Thank you for your inquiry! We will be in touch soon.';

  contactForm.reset();

  setTimeout(() => {
    formMessage.classList.add('hidden');
    formMessage.classList.remove('bg-green-100', 'text-green-800', 'border', 'border-green-300');
  }, 5000);
});
