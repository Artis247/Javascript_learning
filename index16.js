//JavaScript. LocalStorage


document
.querySelector('#box1')
.innerHTML = "JavaScript.LocalStorage"

const myNumber = 42

localStorage.removeItem('number')
console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))
localStorage.clear()

const object = {
  name: 'Max',
  age: 20
}

//JSON.stringify  и JSON.parse

localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
console.log(typeof raw,"raw", raw)
const person = JSON.parse(raw)
console.log(typeof person, "person", person)
person.name = 'Denis'

console.log(person)
//Для синхронизации вкладок
window.addEventListener('storage', event => {
  console.log("STORAGE",event)
})
//localStorage.clear()
// window.onstorage = () => {}