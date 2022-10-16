//JavaScript._Генераторы_Symbol iterator

document
.querySelector('#box1')
.innerHTML = "JavaScript._Генераторы_Symbol iterator"

function* strGenerator(){
    yield 'H'
    yield 'e'
    yield 'l'  //str.next()    {value: 'e', done: false}
    yield 'l'
    yield 'o'
}
const str = strGenerator()

function* numberGen(n=10){
    for(let i=0;i<n;i++){
        yield i
    }
}
const num = numberGen(7)

//ПРИМЕР - создание своего генератора

const iterator = {
    gen(n=10){
        let i = 0

      return {
        next(){
            if (i<n){
                return {value:++i, done:false}
            }
            return {value:undefined, done:true}
        }
      }  
    }
}

//Цикл for of

for( let k of 'Hello'){
   // console.group()
    console.log(k)   //посимвольный вывод стоки
   // console.groupEnd()
}
for( let k of [1,2,3,4,5]){
    // console.group()
     console.log(k)   //вывод массива ПОСИМВОЛЬНО
    // console.groupEnd()
 }

 const iteratorSymbol = {
    [Symbol.iterator](n=10){
        let i = 0

      return {
        next(){
            if (i<n){
                return {value:++i, done:false}
            }
            return {value:undefined, done:true}
        }
      }  
    }
}
for( let k of iteratorSymbol){
    // console.group()
     console.log(k)   //
    // console.groupEnd()
 }

 function* iter(n=7){
    for(let i=0;i<n; i++){
        yield i
    }
 }
 for( let k of iter(4)){
    // console.group()
     console.log(k)   //
    // console.groupEnd()
 }

