//JavaScript. Деструктуризация


document
.querySelector('#box1')
.innerHTML = "JavaScript.Деструктуризация"

function calcValues(a, b) {
    return [
      a + b,
      a - b,
      a * b,
      a / b
    ]
  }
  
  const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
//    const result2 =  calcValues(42, 10)
//   const sum2 = result2[0]
//   const sub2 = result2[1]
//   const [sum2, sub2] = result
  
  console.log( sum, mult, other, sub)
  
  // Objects
  const person = {
    name: 'Max',
    age: 20,
    
    address: {
      country: 'Russia',
      city: 'Moscow'
    }
  }
  const person2 = {
    name: 'Den',
    age: 30,
    
    address: {
      country: 'Russia',
      city: 'SPb'
    }
  }
  const {name, age, car = 'Машины нет'} = person
  console.log(name, age, car)   //Max 20


  // const name = person.name
  const {
    name: firstName = 'Без имени',
    age: age2 =40 ,
    car:car2 = 'Машины нет',
    address: {city: homeTown, country}
  } = person2
  
  console.log(firstName, age2, car2,homeTown, country)
  console.log(person2)
 
  const {name:name3, ...info}= person
  console.log("name3, ...info",name3, info)


  function logPerson({name: firstName = '111', age = 30}) {
    console.log(firstName + ' ' + age)
  }
  
  
  logPerson(person)
  logPerson(person2)