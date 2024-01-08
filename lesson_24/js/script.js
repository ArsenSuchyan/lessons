// Задача № 1

// В консоль потрапить 1, так як будь яка цифра повертає значення true

// let someVar = 0;
// ++someVar;

// if (someVar) {
// 	console.log(someVar);
// }






// Задача № 2

for (let i=1; i<11; ++i) {
   console.log(`Пункт №${i}`)
}







// Задача № 3

// Нічого не виведеться бо кожний з варіантів поверне false

// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// 	console.log('000');
// }






// Задача № 4

function dividing(a, b) {
  if(a&&b && typeof a === `number` && typeof b === `number`) {
   return `Резултат ділення: ${a/b}`
   } else {
      return ``
   }
}

console.log(dividing(20, 2))

console.log(dividing(100, 50))

console.log(dividing(300, 100))

console.log(dividing(`skjdvnsdjnv`, 5))

console.log(dividing(undefined, NaN))

console.log(dividing(30, 0))





// Задача № 5


let array = [`name`, `10`, 10, 5, false]

array.forEach((value) => {
   if(value === 10) {
      console.log(value)
   }
})