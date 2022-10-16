//JavaScript. Map, Set, WeakMap, WeakSet 


document
.querySelector('#box1')
.innerHTML = "JavaScript.Map, Set, WeakMap, WeakSet "

const obj ={
   name:'Denis',
   age:26,                //ОБЪЕКТ
   job:'Fullstack' 
}
const entries = [
    ['name','Denis'],
    ['age',26],          // МАССИВ
    ['job','Fullstack']
]
//методы  объект  <---> массив

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

//Map

const map = new Map(entries)
console.log(map)
console.log(map.get('job'))

map
.set('newField',42)
.set(obj,'Value of Object')
.set(NaN,'Nan ??')

console.log(map)
console.log(map.get(obj))
console.log(map.get(NaN))

//map.delete('job')
console.log(map.has('job'))  //true
console.log(map.size)        //6

for (let entry of map.entries()){
    console.log(entry)
}
//или 
for (let [key,value] of map){  // метод entries не обязателен
    console.log(key,value)
}
for (let val of map.values()){
    console.log(val)
}
for (let key of map.keys()){
    console.log(key)
}
map.forEach((val,key,m)=>{
    console.log(val,key)
})
//=================================

const array =[...map]
const array2 = Array.from(map)

const mapObj = Object.fromEntries(map.entries())

//====Пример использования ============

const users = [
    {name:'Elena'},
    {name:'Alex'},
    {name:'Denis'},
    {name:'Irina'},
    {name:'Vova'},
]
const visits = new Map()
visits
    .set(users[0],new Date())
    .set(users[1],new Date(new Date().getTime()+1000*60))
    .set(users[2],new Date(new Date().getTime()+5000*60))
    .set(users[3],new Date(new Date().getTime()+7000*60))
    .set(users[4],new Date(new Date().getTime()+10000*60))

function lastVisit(user){
    return visits.get(user)
}
console.log(lastVisit(users[2]))

//SET

const set = new Set([1,2,3,3,3,4,5,5,6])
set.add(10).add(20).add(30).add(20)
console.log(set)
console.log(set.has(30))
console.log(set.size)
console.log(set.delete(20))

console.log(set.values())
console.log(set.keys())
console.log(set.entries())
for(let key of set){
    console.log(key)
}
//=====испольхование=========

function uniqValues(array){
   return [...new Set(array)] 
}
console.log(uniqValues([1,2,3,3,5,5,5,5,5,6,7,7,]))

//WeakMap

 let objExample ={name:'WeakMap'}
// const array3 = [objExample]
// objExample = null


const map2 = new WeakMap([
    [objExample,'obj data']
])
//get set delete has
objExample = null

console.log(map2.get(objExample))

//====использование ==
const cache = new WeakMap()
function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user,Date.now())
    }
    return cache.get(user)
}
let lena = {name:'Elena'}
let alex = {name:'Alex'}

cacheUser(lena)
cacheUser(alex)

console.log(cache.has(lena))
console.log(cache.has(alex))

lena = null
console.log(cache.has(lena))

//WeakSet

const users2 = [
    {name:'Elena'},
    {name:'Alex'},
    {name:'Denis'},
    {name:'Irina'},
    {name:'Vova'},
]
const visits2 = new WeakSet()

visits2.add(users2[0],users2[1])
users2.splice(1,0)
console.log(visits2.has(users2[0]))
console.log(visits2.has(users2[1]))