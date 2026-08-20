const links = [...document.querySelectorAll('.side-nav > a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const setActive = () => {
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top < 180) current = section;
  }
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
};
document.addEventListener('scroll', setActive, {passive:true});
setActive();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
