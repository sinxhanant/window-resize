import React from 'react'
import ResizableA from './components/BoxA'
import ResizableB from './components/BoxB'
import ResizableC from './components/BoxC'
import './App.css'

export default function App() {
  return (
    <div>

      <div className="container"
        style={{
         display: 'flex',
         backgroundColor: 'red',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         height: '100vh', // Set to full viewport height
       }}
      >
         <h1>ResizableBox in react-resizable library</h1>
         <h3>Snap Window/Automatic Window Resizing</h3>
         <div className="InnerCont" style={{ display: 'flex',
         backgroundColor: 'yellow',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         height: 800, width: 700}}>
<div className="Top" style={{
   display: 'flex',
   justifyContent: 'center',  alignItems: 'center', width: 600,  backgroundColor: 'green', flexDirection: 'row'}}><ResizableA /><ResizableB /></div>
<div className="Bottom">  <ResizableC /></div>

      </div>
      </div>
    
  
    </div>
  )
}
