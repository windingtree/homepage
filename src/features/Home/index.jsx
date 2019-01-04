// @flow
import React from 'react'
import VideoGallery from 'commons/VideoGallery'
import Events from 'commons/Events'
import LifToken from './LifToken'
import Partners from './Partners'
import InThePress from './InThePress'
import DesignedFor from './DesignedFor'
import Features from './Features'
import Banner from './Banner'

const Home = () => (
  <main className='app-content'>
    <Banner />
    <Features />
    {/* <LifToken /> */}
    <Partners />
    <InThePress />
    <DesignedFor />
    <VideoGallery />
    <Events />
  </main>
)

export default Home
