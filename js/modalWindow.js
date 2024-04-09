function modalWindow() {
  const contactModalWindow = document.querySelector('.modal');

  const openContactModalWindowBtns = document.querySelectorAll('[data-modale-open]');
  const closeContactModalWindowBtn = document.querySelector('[data-modale-close]');

  document.addEventListener('click', e => {
    openContactModalWindowBtns.forEach(btn => {
      if (btn === e.target) {
        openModWindow();
      }
    });
  });

  contactModalWindow.addEventListener('click', e => {
    if (e.target == contactModalWindow || e.target.getAttribute('data-modale-close') == '') {
      closeModWindow();
    }
  });

  document.addEventListener('keydown', e => {
    if (contactModalWindow.style.display == 'block' && e.code == 'Escape') {
      closeModWindow();
    }
  });

  window.addEventListener('scroll', showModalOnScrolEndPage);

  function showModalOnScrolEndPage() {
    if (document.documentElement.scrollHeight - 50 == window.scrollY + document.documentElement.clientHeight - 50) {
      openModWindow();

      window.removeEventListener('scroll', showModalOnScrolEndPage);
    }
  }
}

const openModWindow = () => {
  document.querySelector('.modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '19px';
};

const closeModWindow = () => {
  document.querySelector('.modal').style.display = 'none';
  document.body.style.overflow = '';
  document.body.style.paddingRight = '0px';
};


export default modalWindow
export { openModWindow, closeModWindow };
