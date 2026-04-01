
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Banner/Rating'
import Footer from './Components/Footer'
import GetStart from './Components/GetStart'
import Navbar from './Components/Navbar/Navbar'
import PricingCard from './Components/PricingCard'
import DigiTools from './Components/Cards/DigiTools'
import Cart from './Components/Cart/Cart'
import { ToastContainer } from 'react-toastify'

const dataPromise = fetch('/Data.json').then(res=>res.json())

function App() {

  const [activeTab, setActiveTab]= useState('Products')

  const [carts, setCarts]=useState([])

  console.log(carts)
  
  return (
    <>
    <Navbar carts={carts}/>
    <Banner/>
    <Rating/>
      {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center ">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab w-40 rounded-full  ${activeTab==='Products'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]':''}`}
            aria-label="Products"
            onClick={()=> setActiveTab('Products')}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab w-40 rounded-full ${activeTab==='Cart'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]': ''}`}
            aria-label={`Cart(${carts.length})`}
            onClick={()=> setActiveTab('Cart')}
          />
        </div>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      {activeTab==='Products' &&<DigiTools dataPromise={dataPromise} carts={carts} setCarts={setCarts}/>}
    </Suspense>
   {activeTab==='Cart' && <Cart carts={carts} setCarts={setCarts}/>}
    <GetStart/>
    <PricingCard/>
    <Footer/>
    <ToastContainer />
    
    </>
  )
}

export default App
