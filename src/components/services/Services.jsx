import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Can Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
            <article className="service">
                <div className="service_head">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="service_list">
                    <li>
                      <BsCheckAll className="service_list-icon"/>
                      <p>Custom Interface Design</p>
                    </li>
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>User Experience Optimization</p>
                    </li>
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>Responsive Design for All Devices</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service_head">
                    <h3>Web Development</h3>
                </div>
                <ul className="service_list">
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>Full-Stack Development</p>
                    </li>
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>Dynamic Web Applications</p>
                    </li>
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>API Integration and Development</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service_head">
                    <h3>Content Creation</h3>
                </div>
                <ul className="service_list">
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>Development Project Documentation</p>
                    </li>
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>Educational Content for Developers</p>
                    </li>
                    <li>
                        <BsCheckAll className="service_list-icon"/>
                        <p>Technical Blog Writing</p>
                    </li>
                </ul>
            </article>

        </div>

    </section>
  )
}

export default Services