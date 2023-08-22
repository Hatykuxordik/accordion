'use strict';

const btns = document.querySelectorAll('.icons');
const container = document.querySelectorAll('.item');

/////FOR LOOP
/*
 for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener('click', function () {
     container[i].classList.toggle('open');
   });
 } 
 */

/////FOR OF LOOP
/*
for (const [i, btn] of btns.entries()) {
  btns[i].addEventListener('click', function () {
    container[i].classList.toggle('open');
  });
}
*/

/////FOR EACH LOOP
btns.forEach(function (btn, i) {
  btns[i].addEventListener('click', function () {
    container[i].classList.toggle('open');
  });
});
