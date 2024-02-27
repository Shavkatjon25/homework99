import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Ombor from './Ombor.js'
import Dom from './Dom.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={Ombor}>
    <Dom/>
 </Provider>
   
)
