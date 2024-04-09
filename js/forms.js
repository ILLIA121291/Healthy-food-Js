import { openModWindow, closeModWindow } from './modalWindow.js';

function forms() {
  const forms = document.querySelectorAll('form');

  const message = {
    loading: '../icons/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжимся',
    failure: 'Что-то пошло не так...',
  };

  forms.forEach(form => {
    bindPostData(form);
  });

  const postData = async (url, data) => {
    const resilt = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: data,
    });

    return await resilt.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
    display: block;
    margin: 0 auto; 
    `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
          statusMessage.remove();
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    openModWindow();
    const prevModalDialog = document.querySelector('.modal__content');
    prevModalDialog.classList.add('hide');

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__content');
    thanksModal.innerHTML = `
  <div data-modale-close class="modal__close">&times;</div>
  <div class="modal__title">${message}</div>
  `;
    const modlDialog = document.querySelector('.modal__dialog');
    modlDialog.append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.remove('hide');
      closeModWindow();
    }, 4000);
  }
}

export default forms