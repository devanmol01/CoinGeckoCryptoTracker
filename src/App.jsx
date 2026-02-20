import { useState } from "react"
import { currencyContext } from "./context/CurrencyContext"
import  "./App.css"
import { BrowserRouter } from "react-router-dom"
import Routing from "./Component/Routing/Routing"
function App(){
const[currency,setCurrency]=useState('usd')
 
  return(
    <BrowserRouter>
      <currencyContext.Provider value={{currency,setCurrency}}>
        <Routing />
      </currencyContext.Provider>
    </BrowserRouter>
     
     
  )
}
export default App
