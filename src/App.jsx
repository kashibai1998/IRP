import React from 'react'
import './App.css'
import Child from './components/Child'

function App() {

  return (
    <>
      <div>
        <div>
          <p> Parent - Child Communication</p>
          <Child />
        </div>
      </div>
    </>
  )
}

export default App
