// // Создаем ключ значение
// localStorage.setItem("number", 1); 
// // Вытаскиваем с мини базы 
// console.log(localStorage.getItem("number"));
// // Удаляем значение
// localStorage.removeItem('number');

// //  Очитска значение 

// localStorage.clear();


// Прописываем загрузку всей страницы

window.addEventListener("DOMContentLoaded", function(){
  // Кнопка запомнить меня, нужно для того, что бы сайт не запрашивал постоянно пароль и email.
  // Получаем все значения 
    // let checkbox = document.getElementById('rememberMe'),
    //     change = document.getElementById('change'),
    //     form = document.getElementsByTagName('form')[0];
    // // Очистка кнопки запомнить

    // if(localStorage.getItem("isChecked") === "true") {
    //   checkbox.checked = true;
    // }

    // if(localStorage.getItem("bg" === "changed")) {
    //   form.style.backgroundColor = "#FF4766";
    // }

    // checkbox.addEventListener("click", function(){
    //   localStorage.setItem("isChecked", true); 
    // });

    // change.addEventListener('click', function(){
    //   localStorage.setItem('bg', 'changed');
    //   form.style.backgroundColor = "#FF4766";
    // });


    // Создаем новый обьект

    let persone = {
      name: "Alex",
      age: 25,
      tech: ["mobile", 'notebook']
    }

    // Мы должны пережедать этот формат для понимание базы данных

    // Используем JSON

    let serializedPersone = JSON.stringify(persone);
    // Теперь можем поместить в localStorage
    localStorage.setItem("Alex", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));
});