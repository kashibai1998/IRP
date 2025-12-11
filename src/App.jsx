import React from 'react'
import './App.css'
import Child from './components/parentchild/Child'
import Stopwatch from './components/stopwatch/Stopwatch'
import Tasks from './components/tasks/Tasks'

function App() {

  return (
    <>
      <div>
        <div>
          <p> Parent - Child Communication</p>
          <Child />
        </div>
        <hr />
        <div>
          <p>Stop Watch</p>
          <Stopwatch/>
        </div>
        <hr />
        <div>
          <p>Tasks line-through</p>
          <Tasks />
        </div>
      </div>
    </>
  )
}

export default App
