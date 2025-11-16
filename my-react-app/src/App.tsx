import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello.tsx';  
import { ProfileCard } from './components/ProfileCard.tsx';
import { Counter } from './components/Counter.tsx';
import { NameInput } from './components/NameInput.tsx';

function App() {


  

  /**return(<div><Counter/></div>);*/
  return (<div> <NameInput/></div>);
}

export default App
