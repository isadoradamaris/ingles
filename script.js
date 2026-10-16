// Menu mobile, perguntas frequentes e formulário para WhatsApp.
const header = document.querySelector('.header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), {passive:true});
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.faq-item button').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('.faq-item');
  const open = !item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(other => {
    other.classList.remove('open');
    other.querySelector('button').setAttribute('aria-expanded', 'false');
  });
  if (open) {
    item.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
  }
}));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const profile = form.elements.profile.value || 'Não informado';
  const goal = form.elements.goal.value.trim() || 'Não informado';
  const message = `Olá, Isadora! Vim pelo seu site e gostaria de saber mais sobre as aulas.\n\nNome: ${name}\nE-mail: ${email}\nAulas para: ${profile}\nObjetivo: ${goal}`;
  window.open('https://wa.me/5533984044311?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
});
