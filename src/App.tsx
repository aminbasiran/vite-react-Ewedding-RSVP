import Landing from './components/Landing'
import Details from './components/Details'
import { ReactLenis } from 'lenis/react'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Guestbook from './components/Guestbook'

function App() {

  return (
    <ReactLenis root>
        {/* SPLASH SCREEN */}
        {/* <Splash/> */}
        {/* FIRST SCREEN */}
        <Landing/>
        {/* SECOND SCREEN */}
        <Details/>
        {/* THIRD SCREEN */}
        <Gallery />
      {/* FOURTH SCREEN */}
      <Guestbook />
        <RSVP />
        {/* <Doa/> */}
      
      </ReactLenis>
    
  )
}

export default App
