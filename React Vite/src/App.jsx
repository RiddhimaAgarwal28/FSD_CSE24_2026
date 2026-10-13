import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange'
import NameChange from './components/NameChange'
import ImageManipulation from './components/ImageManipulation'
import MyUseEffect from './components/MyUseEffect'
import FetchProducts from './components/FetchProducts'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
    {/*<div style={{border:'2px solid pink', width:'1000px', height:'100%'}}>
    <h2 style={{color:'violet'}}>Welcome to React App Development</h2>
    <div style={{border:'8px solid purple', width:'500px', height:'1620px'}}>
    <h2 style={{color:'red'}}>Welcome to React App Development</h2>
    <h2 style={{color:'blue'}}>ABES Engineering College</h2>
    <h2 style={{color:'pink'}}>Name : Riddhima Agarwal</h2>
    <h2 style={{color:'green'}}>Roll No. : 2400320100897</h2>
    <h2 style={{color:'yellow'}}>Branch : CSE</h2>
    <h2 style={{color:'orange'}}>Section : 24</h2>
    <h2 style={{color:'white'}}>Skills : Java, C++, HTML, CSS, JavaScript</h2>
      <ICardGallery />
      <ICardGallery/>
      <MyState/>
      <NameChange/>
      <ImageManipulation/>`
      <MyUseEffect/>
      <FetchProducts/>
      </div>*/}
export default App
