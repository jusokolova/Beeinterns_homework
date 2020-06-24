// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};
function resolve1(inputObject) {
  const reversed = {};
  const keyValueHolder = Object.keys(inputObject)[0];
  let value = inputObject[keyValueHolder];
  reversed[value] = keyValueHolder;
  return reversed;
};
const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }

// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

function resolve2(inputObject) {
  const reversed = {};
  const keyValueHolder = Object.keys(inputObject);
  keyValueHolder.forEach(function(key) {
    let value = inputObject[key];
    reversed[value] = key;
  });
  return reversed;
};

const result2 = resolve2(secondObject);
console.log(secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(result2); 
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math
function centuryFromYear(key) {
  let years = Math.floor(key%100);
  let century;
  if (years == '00') {
    century = Math.floor(key/100);
    console.log(century);
  } else {
    century = Math.floor(key/100)+1;
    console.log(century)};
  };
const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year2); // 17.
