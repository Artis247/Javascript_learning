//Javascript_proxy
let h =document. querySelector('#box1')
h.innerHTML = "Javascript_proxy"



//1.Objects
const person = {
    name:'Denis',
    age:25,
    job:'Fullstack'
}
const op = new Proxy(person,{
    get(target,prop){
        console.log('target',target)
        console.log('prop', prop)

        return target[prop]
    },
    set(target,prop,value){
        if(prop in target){
       target[prop] = value 
        }else{
            throw new Error('No prop field in target')
        }
    },
    has(target, prop){
        return ['age','name','job'].includes(prop)
    },
    deleteProperty(target, prop){
        console.log('Deleting...', prop)
        delete target[prop]
        return true
    }

    
})

// Functions

const log = text => 'log :'+ text

const fp = new Proxy(log,{  //объект хэндлеров
    apply(target,thisArg,args){
     console.log('Calling fn ..')   

     return target.apply(thisArg, args).toUpperCase()
    }
})

//Classes

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}
const PersonProxy = new Proxy (Person,{
    construct(target,args){
        console.log("Construct ..")

        return new Proxy(new target(...args),{
            get(t,prop){
                console.log("Getting prop ..",prop)
                return t[prop]
            }
        })
    }
})
const p = new PersonProxy('Maxim',30)

//ПРИМЕР

const exampleProxyObjedct =new Proxy(person,{
    get(target,prop){
        console.log('target',target)
        console.log('prop', prop)

        if(!(prop in target)){
            return prop
            .split('_')
            .map(p => target[p])
            .join(' ')
        }

        return target[prop]
    }

    
})
