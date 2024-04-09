 function slider() {
  const oldSlides = document.querySelectorAll('.offer__slide');

  oldSlides.forEach(slide => {
    slide.remove();
  });

  const sliderWindow = document.querySelector('.offer__slider-inner');
  const prevBtn = document.querySelector('.offer__slider-prev');
  const nextBtn = document.querySelector('.offer__slider-next');

  const displayIndexSlide = document.querySelector('#current');
  const displayTotalSlides = document.querySelector('#total');

  const imgWidth = 650;
  const arrImg = ['./img/slider/food-12.jpg', './img/slider/olive-oil.jpg', './img/slider/paprika.jpg', './img/slider/pepper.jpg'];

  const sliderImgs = arrImg.map((value, index) => {
    return { id: index, url: value };
  });

  const addZero = (location, number) => {
    if (number < 10) {
      return (location.innerHTML = `0${number}`);
    } else {
      return (location.innerHTML = number);
    }
  };

  const creatingNextSlide = start => {
    if (start) {
      const img = document.createElement('img');

      img.classList.add('offer__slide');
      img.src = sliderImgs[0].url;
      img.dataset.id = sliderImgs[0].id;
      img.style.left = '0px';

      sliderWindow.append(img);
    } else {
      let displayImg = +document.querySelector('.offer__slide:nth-child(2)').dataset.id;

      if (displayImg + 1 == sliderImgs.length) {
        displayImg = 0;
      } else {
        displayImg += 1;
      }

      const img = document.createElement('img');
      img.classList.add('offer__slide');
      img.src = sliderImgs[displayImg].url;
      img.dataset.id = sliderImgs[displayImg].id;
      img.style.left = imgWidth + 'px';
      sliderWindow.append(img);
    }
  };

  const creatingPreviousSlide = () => {
    let displayImg = document.querySelector('.offer__slide').dataset.id;

    if (displayImg - 1 < 0) {
      displayImg = sliderImgs.length - 1;
    } else {
      displayImg -= 1;
    }

    const img = document.createElement('img');
    img.classList.add('offer__slide');
    img.src = sliderImgs[displayImg].url;
    img.dataset.id = sliderImgs[displayImg].id;
    img.style.left = '-' + imgWidth + 'px';
    sliderWindow.prepend(img);
  };

  creatingNextSlide('start');
  addZero(displayIndexSlide, +document.querySelector('.offer__slide').dataset.id + 1);
  addZero(displayTotalSlides, sliderImgs.length);
  creatingPreviousSlide();
  creatingNextSlide();

  const showNextSlide = () => {
    nextBtn.removeEventListener('click', showNextSlide);
    prevBtn.removeEventListener('click', showPreviousSlide);
    const displayImgs = document.querySelectorAll('.offer__slide');
    let offset = 0;

    for (let i = 1; i < displayImgs.length; i++) {
      displayImgs[i].style.left = offset * imgWidth - imgWidth + 'px';
      offset++;
    }

    addZero(displayIndexSlide, +displayImgs[2].dataset.id + 1);

    setTimeout(() => {
      displayImgs[0].remove();
      creatingNextSlide();
      nextBtn.addEventListener('click', showNextSlide);
      prevBtn.addEventListener('click', showPreviousSlide);
    }, 500);
  };

  const showPreviousSlide = () => {
    prevBtn.removeEventListener('click', showPreviousSlide);
    nextBtn.removeEventListener('click', showNextSlide);
    const displayImgs = document.querySelectorAll('.offer__slide');
    let offset = 0;

    for (let i = 0; i < displayImgs.length - 1; i++) {
      displayImgs[i].style.left = offset * imgWidth + 'px';
      offset++;
    }

    addZero(displayIndexSlide, +displayImgs[0].dataset.id + 1);

    setTimeout(() => {
      displayImgs[2].remove();
      creatingPreviousSlide();
      nextBtn.addEventListener('click', showNextSlide);
      prevBtn.addEventListener('click', showPreviousSlide);
    }, 500);
  };

  const timerForChageSlide = setInterval(showNextSlide, 5000);

  nextBtn.addEventListener('click', showNextSlide);
  nextBtn.addEventListener('click', () => clearInterval(timerForChageSlide), { once: true });

  prevBtn.addEventListener('click', showPreviousSlide);
  prevBtn.addEventListener('click', () => clearInterval(timerForChageSlide), { once: true });
}


export default slider