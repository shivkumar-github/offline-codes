import React from "react"
import { Provider } from 'react-redux'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <Provider store={store}> {/* instead of values in context we pass store here */}
      <h1 className="text-center">learn about redux toolkit.</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
