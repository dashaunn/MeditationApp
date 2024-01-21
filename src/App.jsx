import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
      <Card 
        key="id"
        item={item}
      />
    )
  })
    return (
      <body>
        <Navbar />
        <main>
          <h2 className="section-title">Sleep Better and Wake up Refreshed</h2>
          <section className='cards-list'>
          {cards}
          </section>
        </main>
      </body>
    
    )
  }

export default App
