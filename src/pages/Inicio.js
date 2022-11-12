import React from 'react'
import MainBanner from './../home/mainbanner/MainBanner.js'
import AboutUs from './../home/aboutus/AboutUs.js'
import Proyects from './../home/proyects/Proyects.js'
import Services from './../home/services/Services.js'
import Action from './../home/action/Action.js'
import Testimonials from './../home/testimonials/Testimonials.js'
import Blog from './../home/blog/Blog.js'
import Partners from './../home/partners/Partners'

export default function Inicio() {
  return (
    <>
        <MainBanner />
        <AboutUs />
        <Services />
        <Proyects />
        <Action />
        <Testimonials />
        <Blog />
        <Partners />
    </>
  )
}
