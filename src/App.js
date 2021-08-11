import { Hero } from './components/main/Hero'
import { NavBar } from './components/header/NavBar'

import './styles/styles.scss'
import 'animate.css'

function App() {
  return (
    <div className="App">
        <header >
            <NavBar/>
        </header>
        <main>
          <Hero/>
        </main>
    </div>
  );
}

export default App;
