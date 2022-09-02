// if (elem.classList.contains('box__element_absolute_25')) {
//   alert('Знайшли!');
// }


// function selectDate() {
//   if (this.classList.contains('box__element_absolute_23')) {
//     this.classList.remove('box__element_absolute_23');
//   }
//   if (this.classList.remove('box__element_absolute_24')) {
//     alert('Так не можна!')
//   } else {
//     this.classList.add('box__element_absolute_24')
//   }
// }

// function checkClear() {
//   if (this.classList.remove('box__element_absolute_24')) {
//     alert ('Так не можна!')
//   } else {
//     this.classList.add('box__element_absolute_24')
//   }
// }

let cells = document.getElementsByClassName('box__element_absolute');
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', selectDate);
}

let one = document.querySelector("#one");

function selectDate() {
  if (one.classList.contains('box__element_absolute_1')) {
    alert ("zJHg.zdg")
  }
}