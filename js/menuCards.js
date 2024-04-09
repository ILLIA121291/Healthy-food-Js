function menuCards() {
  const menu = [
    {
      img: 'img/tabs/vegy.jpg',
      altimg: 'vegy',
      title: 'Фитнес',
      descr: "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
      price: 9,
      id: 'ca94',
    },
    {
      img: 'img/tabs/post.jpg',
      altimg: 'post',
      title: 'Постное',
      descr: "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
      price: 14,
      id: '2091',
    },
    {
      img: 'img/tabs/elite.jpg',
      altimg: 'elite',
      title: 'Премиум',
      descr: "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
      price: 21,
      id: '8364',
    },
  ];

  class MenuCard {
    constructor(title, description, price, img) {
      this.img = img;
      this.title = title;
      this.description = description;
      this.price = price;
      this.usd = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.usd;
    }

    render(parent) {
      const card = document.createElement('div');
      card.classList.add('menu__item');
      card.innerHTML = `<img src=${this.img} alt="vegy"> <h3 class="menu__item-subtitle">Меню "${this.title}"</h3> <div class="menu__item-descr">${this.description}</div> <div class="menu__item-divider"></div> <div class="menu__item-price"> <div class="menu__item-cost">Цена:</div> <div class="menu__item-total"><span>${this.price}</span> грн/день</div></div>`;
      parent.append(card);
    }
  }

  const menuList = document.querySelector('.menu__field > .container');

  menu.forEach(({ title, descr, price, img }) => {
    new MenuCard(title, descr, price, img).render(menuList);
  })

}

export default menuCards;
