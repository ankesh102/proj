import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <section id='home' className='home_section'>

    <p className='home_greet'>
        Hi, My name is 
    </p>

    <h1 className='home_heading_1'>
        Ankesh.
    </h1>

    <h1 className='home_heading_2'>
        I build things for the web.
    </h1>

    <p className='home_desc'>
        the afsdgfh vsdky visldgvsdka vhkusds h gvhsh vvshrev h svhs h
        vhg ghsd dsfgdsfv mgmdbvcmdsvgs hg sdbvsjvgsk dvgsm bsdbvd
        gvbkasbgfysgzcmvh
        
    </p>

    <a href='#work' >
        <button className='home_btn'>Check out my Work !</button>
    </a>
      
    </section>
  )
}

export default Home
