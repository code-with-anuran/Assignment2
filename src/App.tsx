import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Phone from './Pages/Phone'
import PhoneDetails from './Pages/PhoneDetails'
import Footer from './Components/Footer'
import WeatherApp from './Pages/WeatherApp'
import JokeGenerator from './Pages/JokeGenerator'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Phone />} />
          <Route path='/phone/:id' element={<PhoneDetails/>}/>
          <Route path='/weather' element={<WeatherApp/>} />
          <Route path='/joke' element={<JokeGenerator/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

