(() => {
  const getStartedButton = document.getElementById('get-started');
  const modal = document.getElementById('modal');

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  getStartedButton.addEventListener('click', openModal);

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('[data-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
})();

