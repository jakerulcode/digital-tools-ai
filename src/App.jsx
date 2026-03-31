
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Banner/Rating'
import Footer from './Components/Footer'
import GetStart from './Components/GetStart'
import Navbar from './Components/Navbar/Navbar'
import PricingCard from './Components/PricingCard'
import DigiTools from './Components/Cards/DigiTools'

const dataPromise = fetch('/Data.json').then(res=>res.json())

function App() {
  
  return (
    <>
    <Navbar/>
    <Banner/>
    <Rating/>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <DigiTools dataPromise={dataPromise}/>
    </Suspense>
    <GetStart/>
    <PricingCard/>
    <Footer/>
    
    </>
  )
}

export default App
