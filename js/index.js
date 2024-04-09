import calculator from './calculator.js';
import forms from './forms.js';
import menuCards from './menuCards.js';
import modalWindow from './modalWindow.js';
import slider from './slider.js';
import tabChage from './tabChage.js';
import timer from './timer.js';

window.addEventListener('DOMContentLoaded', () => {
  
  tabChage();
  timer('2024-12-10T10:14:00');
  menuCards();
  modalWindow()
  slider();
  forms();
  calculator();
});
