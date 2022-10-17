//JavaScript. Rest-Spread ES6


document
.querySelector('#box1')
.innerHTML = "JavaScript.Rest-Spread"

const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск','Уфа']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
  Ufa: 2
}

const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2
}

// Spread
console.log(...citiesRussia)
console.log(...citiesEurope)

const allCities = [...citiesEurope,'Кзыл-Орда', ...citiesRussia]
// const allCities = citiesEurope.concat(citiesRussia)
console.log("allCities",allCities)
// Работа с объектами  {... obj}
console.log({...citiesRussiaWithPopulation})
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})

/// Practice
const numbers = [5, 37, 42, 17]
console.log("Math.max",Math.max(5, 37, 42, 17))
console.log("Math.max(...)",Math.max(...numbers))
console.log("Math.max.apply",Math.max.apply(null, numbers))

const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))

/// Rest
function sum(a, b, ...rest) {   // сбор оставшихся аргументов в новый массив
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(sum(...nums))  // сбор оставшихся аргументов в новый массив

// const a = nums[0]
// const b = nums[1]

const [a, b, ...other] = nums
console.log(a, b, other)
//  также для объектов
const person = {
  name2: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
}

const {name2, age, ...address} = person

console.log(name2, age, address)