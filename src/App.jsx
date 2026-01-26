import React from 'react'
import './App.css'
import Child from './components/parentchild/Child'
import Stopwatch from './components/stopwatch/Stopwatch'
import Tasks from './components/tasks/Tasks'
import Grid from './components/grid/grid'
import Search from './components/searchWithDebounce/Search'

function App() {

  return (
    <>
      <div>
      <div>
          <p>search</p>
          <Search />
        </div>
        <hr />
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
        <div>
          <p>Grid </p>
          <Grid />
        </div>
        <hr />
        
      </div>
    </>
  )
}

export default App


// We have  been given a task to match margin calls to payments
// A Margin call can be thought of as a request to a client  to make a payment as the balance on their account has fallen below a certain threshold

// Our Margin Calls live on a service / system on a remote system. Payments are available on topic / queue 

// Margincall objects have the following properties

// accountName, accountNumber, isOnCall, callDate, callAmount, sourceSystem, businssUnit

// Payments Live on topic / queue which a are available to you 
// Payments Objects have the following properties
// paymentId, amount, currency, date, sourceSystem, accountNumber, businssUnit

//  Provide some code that will retrieve margin calls from the remote system and match them to payments
 
//  let paymentObj ={
//      "paymentId":1
//      "amount":100
//  }
//  let accNum=20098;
 
//  function retriveMarginCalls(payObj){
//      let matchMarginCallsToPayments;
//      let cachedMarginCalls={}
//      let marginCall = fetch(`marginCallurl?accNum=${accNum}`)
//      .then(res=>res.json())
//      .then(data=>{
//         return data
//      })
     
//      if(cachedMarginCalls[marginCall.accountNumber]){
//          return cachedMarginCalls[marginCall.accountNumber]
//      }
     
     
//      let payments = fetch(`paymentUrl?accNum=${accNum}`)
//      .then(res=>res.json())
//      .then(data=>{
//         return data
//      })
     
//      matchMarginCallsToPayments = payments.filter((pay,idx)=>{
//          return (
//              pay.accountNumber == marginCall.accountNumber &&
//              pay.businssUnit == marginCall.businssUnit &&
//              marginCall.callAmount > 50000
//         )
//      })
     
//      cachedMarginCalls[marginCall.accountNumber] = matchMarginCallsToPayments;
     
//      //return marginCalls;
//  }
 
//  let res = retriveMarginCalls(paymentObj)
 
