//1.Promise - это объект, у которого есть параметры (resolve,reject)
// resolve - это успешные, а reject - это безуспешные.
// У него есть три сотавляющие (pending,fulfilled и rejected)
function getData() {
   return new Promise((resolve, reject) => {
      console.log('Promise {<pending/>}');
   })
}
console.log(getData());

//2.async/await - это асинхронный код, специальный для работы с промисами,
// он облегчает работу.
async function f() {
   let promise = [1,2,3,4,5];
   setTimeout(() => {
      
   }, 1000); 
   let result = await promise;
   console.log(result);
}
f()
//3.Контекстом часто называют значение переменной this - это
//ссылка на объект, метод которого мы сейчас вызываем.
const person = {
   name: 'Сары',
   age: '19',
   sayHello() {
      console.log(`Name is ${this.name}`);
      console.log(`Age is ${this.age}`);
   }
}
person.sayHello()

//4.Замыкание это функция у которой есть доступ к своей
// внешней функции по области видимости,
// замыкание может запоминать и получать доступ к переменным, и аргументам.
function urlGenerator(main) {
   return function(url) {
      return `https://${url}.${main}`
   }
}
const comUrl = urlGenerator('com');
console.log(comUrl('google'));
console.log(comUrl('facebook'));

//5.В стрелочных функциях есть три перимущество:
//1)Это очень удобный короткий синтаксис
//2)Можно красиво написать в одну строчку
//3)В работе со значением this в стрелочных функциях
//  выглядит более понятнее, чем в обычных функциях.
const fruits = ['арбузы', 'яблоки', 'бананы'];

const freshFruits = fruits.map(fruit => `Свежие ${fruit}`)
/*const freshFruits = fruits.map(function(fruit) {
   return `Свежие ${fruit}`;
})*/
console.log(freshFruits);