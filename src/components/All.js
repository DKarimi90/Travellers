import React from 'react'
import Planned from "./Planned";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Agency from "./Agency";
import Destinations from "./Destinations";
import Home from "./Home";

const All = () => {
  return (
    <div>
            <Home />
            <Destinations />
            <Agency />
            <Testimonials />
            <Planned />
            <Footer />
    </div>
  )
}

export default All