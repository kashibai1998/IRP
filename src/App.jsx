import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

function App() {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    console.log("-k- use effect")
  },[])

  const getData =(data)=>{
    setValue(data)
  }
  const items = Array(10).fill(0).map((_,i)=>(<div>item {i}</div>))

  return (
    <>
      <div>
      {items}
      </div>
      <Child1 value={value} onChange={(data)=>getData(data)}/>
      <Child2 value={value} setValue={setValue}/>
    </>
  )
}

export default App
