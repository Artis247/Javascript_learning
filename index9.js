//Javascript_proxy_USING_EXAMPLES
document
.querySelector('#box1')
.innerHTML = "Javascript_proxy_USING_EXAMPLES"

// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
      get: (obj, prop) => 
      (prop in obj ? obj[prop] : defaultValue)
    })
  }
  
  const position = withDefaultValue(
    {
      x: 24,
      y: 42
    },
    0
  )
  
  // Hidden properies
  const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {  //target - объект с которым мы шайтаним
      has: (obj, prop) => 
      prop in obj && !prop.startsWith(prefix),

      ownKeys: obj => 
      Reflect.ownKeys(obj).filter(p =>   //Reflect объект для более детального разбора ключей объекта
        !p.startsWith(prefix)),

      get: (obj, prop, receiver) =>
       (prop in receiver ? obj[prop] : void 0)
    })
  }
  
  const data = withHiddenProps({  //скрываем в объекте поля с нижним подчеркиванием
    name: 'Denis',
    age: 25,
    _uid: '1231231'
  })
  
  // Optimization
  const IndexedArray = new Proxy(Array, { //посик по id опртимизирован
    construct(target, [args]) {
      const index = {}
      args.forEach(item => (index[item.id] = item))
  
      return new Proxy(new target(...args), {
        get(arr, prop) {
          switch (prop) {
            case 'push':
              return item => {
                index[item.id] = item
                arr[prop].call(arr, item)
              }
            case 'findById':
              return id => index[id]
            default:
              return arr[prop]
          }
        }
      })
    }
  })
  
  const users = new IndexedArray([
    { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
    { id: 22, name: 'Elena', job: 'Student', age: 22 },
    { id: 33, name: 'Victor', job: 'Backend', age: 23 },
    { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
  ])

