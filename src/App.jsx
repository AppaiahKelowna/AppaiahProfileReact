import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RightSideMyLink from './RightSideMyLink/RightSideMyLink'
import LeftSideMyLink from './LeftSideMyLink/LeftSideMyLink'
import ConnectWithMe from './ConnectWithMe/ConnectWithMe';
import ContactMe from './ContactMe/ContactMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bodyWrapper'>
    <div className='profileWrapper'>
        <LeftSideMyLink/>
        <RightSideMyLink/>
      </div>
      <div className='ConnectWithMeWrapper'>
        <ConnectWithMe></ConnectWithMe>
      </div>
      <ContactMe/>
    </div>
    </>
  )
}

export default App
