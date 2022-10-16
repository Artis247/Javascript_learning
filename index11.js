//JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex)

document
.querySelector('#box1')
.innerHTML = "JavaScript. Методы массивов"

const people = [
    {name:'Denis',age:25,budget:40000},
    {name:'Elena',age:17,budget:3400},
    {name:'Igor',age:49,budget:50000},
    {name:'Mickle',age:15,budget:1800},
    {name:'Vasilisa',age:24,budget:25000},
    {name:'Vika',age:38,budget:2300}
]
//Привычный вариант ES5
for(let i=0;i<people.length;i++){
   // console.log(people[i])
}
//FOR ..OF  ES6
for(let person of people){
  //  console.log(person)
}
//ForEach
//people.forEach(function(person, index, pArr){
people.forEach(function(person){    
  //  console.log(person)
 //   console.log(index)
 //   console.log(pArr)
})
//people.forEach(person=> console.log(person))

//Map
const newPeople = people.map(person=>{
    return person
  //  return person.name 
  //  return '${person.name} ({$person.age})' 
                   //можем как угодно трансофрмировать 
})                 //данные и заносить их в новый массив

//Filter
const adults =[]
for(let i=0;i<people.length;i++){
    
    if(people[i].age >= 18 ){
        adults.push(people[i])
    }
}
console.log(adults)
const adultsFilter = people.filter(person=>{
    if(person.age >=18){
        return true
    }
})
console.log(adultsFilter)

const adultsFilterUsual = people.filter(person=>person.age>=18)
console.log(adultsFilterUsual)

//Reduce 
let amount = 0
for(let i=0;i<people.length;i++){
    amount+=people[i].budget
}
console.log(amount)

const amount2 = people.reduce((total, person)=>{
return total+person.budget
},0)
console.log(amount2)

const amount3 = people.reduce((total,person)=>total+person.budget,0)
console.log(amount3)

//Find
const igor = people.find(person=>person.name==='Igor')
console.log(igor)

//FindIndex
const vikaIndex = people.findIndex(person=>person.name==='Vika')
console.log(vikaIndex)

//=====================================
const finPeople =people
.filter(person => person.budget >3000)
.map(person=>{
   return {
    info: {name:person.name,
           age: person.age
          },
    budget:person.budget
   } 
})
.reduce((total,person)=>total+person.budget,0)
console.log(finPeople)