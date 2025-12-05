import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
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
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/phone' element={<Phone />} />
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

