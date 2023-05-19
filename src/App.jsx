import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"



function App() {


  return (
    // <>
    //   <Navbar/>
    //   <Hero/>
    // </>
    <div className="bg-gradient-to-r from-[#0500FF] via-[#F8FB76] to-[#F8FB76]">

      <div className="bg-[#F6FAFF] opacity-90">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
