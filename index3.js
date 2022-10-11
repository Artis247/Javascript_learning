console.log('Start')
console.log('Start2')
// $.on('button','click',function(){
//     console.log('Button clickerd')
// })
function timeout5sec(){
    console.log('timeout5sec')
}
window.setTimeout(function(){ //метод браузерного API
    console.log('Inside timeout after 2 sec')
},2000)
window.setTimeout(function(){ //метод браузерного API
    console.log('Inside timeout after 0 sec')
},0)
setTimeout(timeout5sec,5000)
console.log('End')