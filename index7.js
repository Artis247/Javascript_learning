//ASYNC  AWAIT
const delay = ms =>{
    return new Promise(r => setTimeout(() =>r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos(){
    console.log("Fetch todo started ..")
    return delay(2000)
    .then(() => {
        return fetch(url)
    })
    .then(response => response.json())
}
fetchTodos()
    .then(data => {
        console.log('Data :', data)
    })
    .catch(e => console.error(e))

async function fetchAsynTodos(){
    console.log("Fetch2 todo started ..")
    try {
        await delay(2000)
    const response2 = await fetch(url)
    const data2 = await response2.json()
    console.log('Data2 :', data2) 
    } catch (error) {
       console.log(error) 
    } finally {

    }
}
fetchAsynTodos().then()