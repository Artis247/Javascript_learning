//JavaScript. Fetch, XMLHttpRequest (XHR), Ajax


document
.querySelector('#box1')
.innerHTML = "JavaScript.Fetch, XMLHttpRequest (XHR), Ajax"

//FETCH

const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
}

function sendRequestGET(method, url) {
    const headers = {
      'Content-Type': 'application/json'
    }
  
    return fetch(url, {
      method: method,
      headers: headers
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
  
      return response.json().then(error => {
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e
      })
    })
  }

const body = {
    name: 'Denis',
    age: 26
  }
sendRequestGET('GET', requestURL)
  .then(data => console.log("FETCH_GET",data))
  .catch(err => console.log(err))


sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))

//XMLHttpRequest

const requestURL2 = 'https://jsonplaceholder.typicode.com/users'

function sendRequest2(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
//xhr - абревиатура xml http request
    xhr.open(method, url)  // открытие соединения ПЕРВОЕ ДЕЙСТВО

    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {   // вызов функции оьработки ошибки
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body)) // отправка запроса ВТОРОЕ ДЕЙСТВО
  })
}

sendRequest2('GET', requestURL2)
  .then(data => console.log("XMLHttpRequest",data))
  .catch(err => console.log(err))

const body2 = {
  name: 'Penis',
  age: 26
}

sendRequest2('POST', requestURL2, body2)
  .then(data => console.log(data))
  .catch(err => console.log(err))