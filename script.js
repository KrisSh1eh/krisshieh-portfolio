// Recruitment website interactions.
// Replace the placeholder URLs in index.html before publishing.

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
    alert('Before publishing, replace this button URL with your ethics-approved registration form link.');
  });
}
