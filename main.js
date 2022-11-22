window.addEventListener("DOMContentLoaded", ()=> {

let slide = document.querySelector(".slide");
let slide2 = document.querySelector(".stwo");
let food = document.querySelectorAll(".img");
let food2 = document.querySelectorAll(".two");
const slideCount = 5000;
let changePos = 0;
let changePos2 = 0;
let index = 2
let index2 = 2

let foodInterval = setInterval(() => {
   changePos+= 16.6; 
    if (changePos >= 0) {
        slide.style = `transform: translate(-${changePos}%)`;
        food[index].classList.add('active')
        food[index -1 ].classList.remove('active')
        index++
    }
 if(changePos == 66.4) {
            changePos = 0;
            slide.style = `transform: translate(-${changePos}%)`
            index = 1
            food[index].classList.add('active')
            food[5].classList.remove('active')
            index++
        }


     

}, slideCount);

setInterval(() => {
    changePos2+= 16.6; 
     if (changePos2 >= 0) {
         slide2.style = `transform: translate(-${changePos}%)`
         food2[index2].classList.add('active')
         food2[index2 -1 ].classList.remove('active')
         index2++
     }
  if(changePos2 == 66.4) {
             changePos2 = 0;
             slide2.style = `transform: translate(-${changePos}%)`
             index2 = 1
             food2[index2].classList.add('active')
             food2[5].classList.remove('active')
             index2++
         }
 

 }, slideCount);





})