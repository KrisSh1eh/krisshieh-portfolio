document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const registration = document.getElementById('registrationLink');
if (registration && registration.getAttribute('href').startsWith('REPLACE_')) {
  registration.addEventListener('click', e => {
    e.preventDefault();
    alert('Replace this URL with your ethics-approved registration form before publishing.');
  });
}
