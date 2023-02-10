import React from 'react'
import './About.css';
import Heading from '../../Components/Heading/Heading'

const About = () => {
  return (
    <section id='about'>
        <Heading index='01' heading="About Me" />
        <div className='about_container'>
            <div className='about_left'>
                <p className='about_desc'>
                    Ankesh Kumar PAndey
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Aliquam doloremque, deserunt similique iure
                     labore ducimus consequuntur in esse neque. Deserunt.
                </p>

                <p className='about_desc'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Repudiandae aperiam vel quam modi iste fugiat, ad beatae nam
                     voluptates accusantium dolorem quidem
                     officia voluptatibus numquam quibusdam fugit? Eaque, quam eum.
                </p>

            </div>
            <div className='about_right'>
                <img src="" alt="profile_img" className='about_profile_img'/>
                <div className="about_img_border" />
            </div>


        </div>
      
    </section>
  )
}

export default About
