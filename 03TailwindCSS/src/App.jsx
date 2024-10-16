import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind Test</h1>
<Card username = 'Aisha Shafiya' post = 'Software Engineer Web'/>

<Card username = 'Aisha Amreen' />
    </>
  )
}

export default App
