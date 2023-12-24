import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasePage from './Pages/BasePage'
import './global.css'
import GlobalStyles from './globalStyles'

function App() {

  return (
    <>
      <GlobalStyles/>      
        <BasePage/>
    </>
  )
}

export default App
