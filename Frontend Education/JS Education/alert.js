
// let result;
// let a = prompt('Вкажіть число');
// let b = prompt('Вкажіть число');

// result = (+a + +b < 4) ? 'Нижче' : (+a + +b == 4) ? 'Рівно' : 'Вище';

// alert(result);


// let message;
// let login = prompt('Вкажіть логін');

// message = (login == 'Працівник') ? 'Привіт' :
//   (login == 'Директор') ? 'Вітаю!' :
//   (login == '') ? 'Немає логіну' : '';
  
// alert(message);


// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }


// let i = 0;

// while (i < 3) {
//   alert(`число ${i}`);
//   i++;
// }


// let num;

// do {
//   num = prompt("Введене число, більше за 100?", 0)
// } while (num <= 100 && num);


// for (let i = 2;; i++) {
//   if (i / i == 1 && i % 1 == i) {
//     alert(i);
//   }
//


// let browser = 'Firefox';

//   if (browser == 'Edge') {
//     alert("You've got the Edge!")
//   }
//   if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
//     alert('Ми підтримуємо і ці браузери')
//   }


let a = prompt('a?', '');

switch (a) {
  case '0':
    alert(0);
    break;
  case '1':
    alert(1);
    break;
  case '2':
  case '3':  
    alert('2,3');
    break;
}