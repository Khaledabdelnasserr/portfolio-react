// import React from 'react'



import './Hero.css'
import profile_img from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I’m Khaled Nasser, frontend developer based in Egypt.</span></h1>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                {/* <div className="hero-resume">My resume</div> */}
            </div>
        </div>
    )
}

export default Hero
