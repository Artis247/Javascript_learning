 console.log('Request data...')

// setTimeout(()=>{
//     console.log('Preparing data...')
//     const backendData = {
//         server:'aws',
//         port:2000,
//         status:'working'
//     }
//     setTimeout(()=>{
//         backendData.modified = true
//         console.log('Data received',backendData)
//     },2000)
// },2000)
//=========ПРОМИСЫ
const p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Preparing data...')
        const backendData = {
            server:'aws',
            port:2000,
            status:'working'
        }
        resolve(backendData)
    },2000)
    
})
p.then((data)=>{
    
   // const p2 = new Promise((resolve,reject)=>{
    return new Promise((resolve,reject)=>{    
        setTimeout(()=>{
            data.modified = true
            resolve(data)
          //  reject(data)
          //  console.log('Data received',data)
        },2000)
    })
    // p2.then(clientData =>{
    //     console.log('Data received',clientData)
    // }) 
})

.then(clientData =>{
         console.log('Data modified',clientData)
        }
     )
.catch(err => console.log('Erroe: ',err))
.finally(()=>console.log('Finally'))

const sleep = ms => {
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),ms)
    })
}
sleep(2000).then(()=> console.log('After 2 sec'))
sleep(3000).then(()=> console.log('After 3 sec'))

Promise.all([
    sleep(2000),
    sleep(5000)
]).then(()=>{
    console.log('All promises')
})

Promise.race([
    sleep(2000),
    sleep(5000)
]).then(()=>{
    console.log('Race promises')
})
