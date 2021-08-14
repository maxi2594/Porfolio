import { Hero } from './components/main/Hero'
import { NavBar } from './components/header/NavBar'

import './styles/styles.scss'
import 'animate.css'
import { MenuScreen } from './components/header/MenuScreen'
import { useReducer, useState } from 'react'
import { uiContext } from './context/uiContext'
import { uiReducer } from './reducers/uiReducer'
import { HomeScreen } from './components/HomeScreen'
import { AppRuter } from './routes/AppRuter'

const init = ()=>(
  {
    menu : { active: false }
  })

function App() {

  const [state, dispatch] = useReducer(uiReducer, {}, init)
    
  const { menu } = state;

  return (

    <uiContext.Provider value={ state }>

          <AppRuter/>

    </uiContext.Provider>

  );
}

export default App;
