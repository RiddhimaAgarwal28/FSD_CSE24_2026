import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{border:'8px solid purple', width:'500px', height:'1620px'}}>
    {/*<h2 style={{color:'red'}}>Welcome to React App Development</h2>
    <h2 style={{color:'blue'}}>ABES Engineering College</h2>
    <h2 style={{color:'pink'}}>Name : Riddhima Agarwal</h2>
    <h2 style={{color:'green'}}>Roll No. : 2400320100897</h2>
    <h2 style={{color:'yellow'}}>Branch : CSE</h2>
    <h2 style={{color:'orange'}}>Section : 24</h2>
    <h2 style={{color:'white'}}>Skills : Java, C++, HTML, CSS, JavaScript</h2>
      <ICardGallery />
      <ICardGallery/>*/}
      <MyState/>
      <ColorChange/>
    </div>
  )
}

export default App
