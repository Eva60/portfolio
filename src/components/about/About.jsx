import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from'react-icons/fa'
import {AiOutlineUsergroupAdd} from'react-icons/ai'
import {PiFoldersBold} from'react-icons/pi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

              <article className="about_card">
                <AiOutlineUsergroupAdd className="about_icon"/>
                <h5>Clients</h5>
                <small>20+ Worldwide</small>
              </article>

                <article className="about_card">
                  <PiFoldersBold className="about_icon"/>
                  <h5>Projects</h5>
                  <small>30+ completed</small>
                </article>
          </div>
          <p>
            Hi, my name is Eva, a self-taught software developer.
            I've been passionate about coding since I was a child,
            and I've spent countless hours teaching myself the skills I need to become a successful developer.
            My journey has been challenging, but I'm proud of what I've accomplished so far.
            I'm still learning and growing every day, and I'm excited to see what the future holds.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About