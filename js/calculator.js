
function calculator () {



const result = document.querySelector('.calculating__result > span');
result.innerHTML = 0;
if (!localStorage.getItem('sex') || !localStorage.getItem('ratio')) {
  localStorage.setItem('sex', 'female');
  localStorage.setItem('ratio', '1.375');
}

let sex = localStorage.getItem('sex') ?? 'female';
let height = localStorage.getItem('height') ?? null;
let weight = localStorage.getItem('weight') ?? null;
let age = localStorage.getItem('age') ?? null;
let ratio = localStorage.getItem('ratio') ?? 1.375;

let heightInput = (document.querySelector('#height').value = height);
let weightInput = (document.querySelector('#weight').value = weight);
let ageInput = (document.querySelector('#age').value = age);

calcTotal();

function calcTotal() {
  if (!sex || !height || !weight || !age || !ratio) {
    result.textContent = '0';
    return;
  }

  if (sex == 'female') {
    result.textContent = Math.floor((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    return;
  }

  if (sex == 'male') {
    result.textContent = Math.floor((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    return;
  }
}

const gender = document.querySelector('#gender');
gender.querySelector(`#${sex}`).classList.add('calculating__choose-item_active');

gender.addEventListener('click', e => {
  if (e.target.id == 'female' || e.target.id == 'male') {
    sex = e.target.id;
    localStorage.setItem('sex', e.target.id);

    gender.querySelectorAll('.calculating__choose-item').forEach(value => {
      value.classList.remove('calculating__choose-item_active');
    });
    e.target.classList.add('calculating__choose-item_active');

    calcTotal();
  }
});

const physicalActivity = document.querySelector('.calculating__choose_big');

physicalActivity.querySelector(`[data-ratio="${ratio}"]`).classList.add('calculating__choose-item_active');

physicalActivity.addEventListener('click', e => {
  if (e.target && e.target.dataset.ratio) {
    ratio = +e.target.dataset.ratio;
    localStorage.setItem('ratio', e.target.dataset.ratio);

    document.querySelectorAll('.calculating__choose_big  .calculating__choose-item').forEach(value => {
      value.classList.remove('calculating__choose-item_active');
    });
    e.target.classList.add('calculating__choose-item_active');
    calcTotal();
  }
});

function getDynamicData(id) {
  document.querySelector(id).addEventListener('input', e => {
    switch (id) {
      case '#height':
        height = +e.target.value;
        localStorage.setItem('height', e.target.value);
        break;
      case '#weight':
        weight = +e.target.value;
        localStorage.setItem('weight', e.target.value);
        break;
      case '#age':
        age = +e.target.value;
        localStorage.setItem('age', e.target.value);
        break;
    }
    calcTotal();
  });
}

getDynamicData('#height');
getDynamicData('#weight');
getDynamicData('#age');

}

export default calculator