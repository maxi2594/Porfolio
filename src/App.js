import { useReducer, useState } from 'react'

import './styles/styles.scss'
import 'animate.css'

import { uiContext } from './context/uiContext'
import { uiReducer } from './reducers/uiReducer'
import { AppRuter } from './routes/AppRuter'

const init = ()=>(
  {
    menu : { active: false }
  })

function App() {

  const [state, dispatch] = useReducer(uiReducer, {}, init)
    
  const { menu } = state;

  return (

    <uiContext.Provider value={ {state, dispatch} }>

          <AppRuter/>

    </uiContext.Provider>

  );
}

export default App;
