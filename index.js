const person = new Object({
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("GREET!!");
  },
});

Object.prototype.sayHello = function () {
  console.log("HELLO");
};

const Lena = Object.create(person);
Lena.name = "Elana";

const str = new String("I am string");

//Javascript_call,bind,apply

function hello() {
  console.log("Hello", this);
}
const member = {
  name: "Denis",
  age: 27,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  sayHelloDocument: hello.bind(document),
  logInfo: function (job,phone) {
    console.group(this.name,' info');
    console.log("Name is", this.name);
    console.log("Age is", this.age);
    console.log('Job is ', job);
    console.log('Phone ', phone);
    console.groupEnd();
  },
};

const Vera = {
  name: "Vera",
  age: 23,
};
member.logInfo.bind(Vera)('dev','11100022');
const fnVeraInfoLog = member.logInfo.bind(Vera,'fronted','1222333444');
fnVeraInfoLog('fronted','1222333444');

member.logInfo.call(Vera,'dev','11100022')

member.logInfo.apply(Vera,['dev','11100022'])

const array = [1,2,3,4,5]
//1
function multBy(arr,n){
    return arr.map(function(i){
        return i*n
    })
}

//2
Array.prototype.mltBy=function(n){
    return this.map(function(i){
        return i*n
})
}
console.log(multBy(array,5))
console.log(array.mltBy(8))

//Javascript_ЗАМЫКАНИЯ