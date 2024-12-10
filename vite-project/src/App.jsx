
import { useEffect, useState } from 'react'
import './App.css'
import CreateTdodo from './CreateTodo'
import GetTodo from './GetTdo'

function App() {
  const [n, setn] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/TodoApis')
      .then(function (d) {
        const data = d.json()
        setn(data)
        console.log(data);

      })
  })
  return (
    <>
      <h1>TODO</h1>
      <CreateTdodo />
      <GetTodo todo={n} />
    </>
  )
}

export default App
