
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("bg-dark"); // Добавляем/удаляем класс для темного фона
  body.classList.toggle("bg-light-subtle"); // Добавляем/удаляем класс для светлого фона

  textElements.forEach(element => {
    element.classList.toggle("text-dark"); // Переключаем класс для темного текста
    element.classList.toggle("text-white"); // Переключаем класс для светлого текста
  });
  
}

