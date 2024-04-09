export default function tabChage() {
  const tabcontents = document.querySelectorAll('.tabcontent');
  const tabcontentBtnsContaner = document.querySelector('.tabheader__items');
  const tabcontentBtns = tabcontentBtnsContaner.querySelectorAll('div');
  

  const cleaning = () => {
    tabcontents.forEach(tab => {
      tab.style.display = 'none';
      tab.classList.remove('fade');
    });

    tabcontentBtns.forEach(btn => {
      btn.classList.remove('tabheader__item_active');
    });
  };

  const displayTab = (i = 0) => {
    tabcontents[i].style.display = 'block';
    tabcontents[i].classList.add('fade');
    tabcontentBtns[i].classList.add('tabheader__item_active', 'fade');
  };

  cleaning();
  displayTab();

  tabcontentBtnsContaner.addEventListener('click', event => {
    if (event.target && event.target.closest('.tabheader__items')) {
      tabcontentBtns.forEach((btn, i) => {
        if (btn == event.target) {
          cleaning();
          displayTab(i);
        }
      });
    }
  });
}
