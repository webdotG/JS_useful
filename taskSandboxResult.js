//функция runCode принимает кнопку в качестве аргумента
function runCode(button) {
            
  //получаю родительский контейнер кнопки
  const container = button.parentElement;
  
  //нахожу элемент textarea с классом 'code' внутри контейнера
  const codeInput = container.querySelector('.task__code');
  
  //нахожу элемент с классом 'result' внутри контейнера
  const resultOutput = container.querySelector('.task__result');

  try {

      //получаю значение кода из текстового поля ввода
      const code = codeInput.value;

      //выполняю код с помощью функции eval
      const result = eval(code);

      //вывожу результат выполнения кода в элемент с классом 'result'
      //innerHTML свойство DOM-элемента, позволяет получить или установить HTML-содержимое элемента
      resultOutput.innerHTML = "Результат: " + result;
  
  } catch (error) {

      //в случае ошибки вывожу сообщение
      resultOutput.innerHTML = "Error: " + error.message;
  }
}