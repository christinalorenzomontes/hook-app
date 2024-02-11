import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHooks /> */}
    <MultipleCustomHooks />
  </React.StrictMode>,
)
