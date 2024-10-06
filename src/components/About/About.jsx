// import React from 'react'



import './About.css'
import them_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpeg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={them_pattern} alt="" />
            </div>
            <div className="about-sections">
                {/* <div className="about-left">
                    <img src={profile_img} alt="" />
                </div> */}
                <div className="about-right">
                    <div className="about-para">
                        <h1 className='mk'>MY SKILLS</h1>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "100%" }}
                        />
                        </div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "100%" }}
                        />
                        </div>
                        <div className="about-skill"><p>Next JS</p><hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill"><p>Git & Github</p><hr style={{ width: "78%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                {/* <hr /> */}
                {/* <div className="about-achievement">
                    <h1>50+</h1>
                    <p>HAPPY CLIENTS</p>
                </div> */}
            </div>
        </div>
    )
}

export default About
