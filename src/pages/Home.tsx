import React from 'react'
import Herobanner from '../assets/images/hero-banner.png'
import ClientOne from '../assets/images/client-1.webp'
import ClientTwo from '../assets/images/client-2.png'
import ClientThree from '../assets/images/client-3.png'
import ClientFour from '../assets/images/client-4.png'
import ClientFive from '../assets/images/client-5.png'
import AboutBanner from '../assets/images/about-banner.png'
import SkillBanner from '../assets/images/skill-banner.png'
import TestOne from '../assets/images/testi-1.png'
import TestTwo from '../assets/images/testi-2.png'
import TestThree from '../assets/images/testi-3.png'
import TestFour from '../assets/images/testi-4.png'
import { Link, useNavigate } from 'react-router-dom'
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoPython
} from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { CIcon } from '@coreui/icons-react';
import { cibMysql } from '@coreui/icons';
import { SiBootstrap, SiDjango, SiExpress, SiFlutter, SiLinux } from 'react-icons/si'

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <article>
          <section className="section hero" aria-label="home">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle ">👋, My name is Charitra</p>
                <h1 className="headline-lg">I'm a Software Developer</h1>

                <p className="hero-text body-md">
                  Based in Bhaktapur, Nepal.
                </p>

                <Link to="https://github.com/charitraa" className="btn btn-primary">Let's Start</Link>

              </div>

              <figure className="hero-banner">
                <img src={Herobanner} width={680} height={645}
                  alt="Charitra Shrestha" className="w-100" />
              </figure>

            </div>
          </section>

          {/* CLIENT SECTION */}
          <section className="client" aria-label="Trusted client">
            <div className="container">
              <ul className="slider">

                <li className="slider-item">
                  <img src={ClientOne} width={130} height={40} alt="clients" className="w-100" />
                </li>

                <li className="slider-item">
                  <img src={ClientTwo} width={130} height={10} alt="clients" className="w-100" />
                </li>

                <li className="slider-item">
                  <img src={ClientThree} width={130} height={40} alt="clients" className="w-100" />
                </li>

                <li className="slider-item">
                  <img src={ClientFour} width={130} height={40} alt="clients" className="w-100" />
                </li>

                <li className="slider-item">
                  <img src={ClientFive} width={130} height={40} alt="clients" className="w-100" />
                </li>
              </ul>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="section about" aria-label="about me">
            <div className="container">

              <figure className="about-banner">
                <img src={AboutBanner} width="580" height="554" loading="lazy"
                  alt="charitra" className="w-100" />
              </figure>

              <div className="about-content">

                <h2 className="title-lg">I'm a Junior Software Developer with over 1 years of experience.</h2>

                <p className="body-md section-text">
                  I'm a Junior Software Developer with over 1 year of experience, currently studying BSc(Hons) in Computer Science and Software Engineering at the University of Bedfordshire. Based in Bhaktapur, Nepal, I enjoy programming, sharing knowledge, and writing code while continuously learning new skills. I am passionate about programming, games, and sports, especially music.
                </p>

                <ul className="about-list">

                  <li>
                    <p className="list-text">
                      <strong className="strong title-md">50+</strong> Project Completed
                    </p>
                  </li>

                  <li>
                    <p className="list-text">
                      <strong className="strong title-md">10+</strong> Happy Clients
                    </p>
                  </li>

                </ul>

                <div className="wrapper">
                  <a className="btn btn-primary" onClick={() => navigate('/contact')}>Contact Me</a>

                  <a className="btn btn-secondary" onClick={() => navigate('/portfolio')}>Portfolio</a>
                </div>
              </div>
            </div>
          </section>

          {/* SKILL SECTION */}
          <section className="section skill" aria-labelledby="skill-label">
            <div className="container">

              <div className="skill-content">
                <h2 className="section-title headline-md" id="skill-label">My Skills</h2>

                <ul className="skill-list">
                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#e44d26" }}> {/* HTML */}
                      <div className="card-media">
                        <IoLogoHtml5 color="#000" size={40} />
                      </div>
                      <h2 className="card-title">HTML</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#264de4" }}> {/* CSS */}
                      <div className="card-media">
                        <IoLogoCss3 color="#000" size={40} />
                      </div>
                      <h2 className="card-title">CSS</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#1082a7" }}> {/* React */}
                      <div className="card-media">
                        <IoLogoReact color="#000" size={40} />
                      </div>
                      <h2 className="card-title">React JS</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#3776AB" }}> {/* Python */}
                      <div className="card-media">
                        <IoLogoPython color="#000" size={40} />
                      </div>
                      <h2 className="card-title">Python</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#096e5f" }}> {/* Django */}
                      <div className="card-media">
                        <SiDjango color="#000" size={40} />
                      </div>
                      <h2 className="card-title">Django</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#7952B3" }}> {/* Bootstrap */}
                      <div className="card-media">
                        <SiBootstrap color="#000" size={40} />
                      </div>
                      <h2 className="card-title">Bootstrap</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#90c53f" }}> {/* Express */}
                      <div className="card-media">
                        <SiExpress color="#000" size={40} />
                      </div>
                      <h2 className="card-title">Express.js</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#5fc9f8" }}> {/* Flutter */}
                      <div className="card-media">
                        <SiFlutter color="#000" size={40} />
                      </div>
                      <h2 className="card-title">Flutter</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#FCC624" }}> {/* Linux */}
                      <div className="card-media">
                        <SiLinux color="#000" size={40} />
                      </div>
                      <h2 className="card-title">Linux</h2>
                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" style={{ backgroundColor: "#00758f" }}> {/* MySQL */}
                      <div className="card-media">
                        <CIcon icon={cibMysql} size="xxl" style={{ color: "#000" }} />
                      </div>
                      <h2 className="card-title">MySQL</h2>
                    </div>
                  </li>
                </ul>

              </div>

              <figure className="skill-banner">
                <img src={SkillBanner} width="581" height="657" loading="lazy"
                  alt="Charitra Shrestha" className="w-100" />
              </figure>

            </div>
          </section>

          {/* CTA SECTION */}
          <section className="cta">
            <div className="container">
              <h2 className="title-lg">Interested working with me?</h2>

              <a href="mailto:stharabi9862187405@gmail.com" className="btn btn-tertiary" >Contact Now</a>
            </div>
          </section>

          {/* TESTIMONIAL SECTION */}
          <section className="section testi" aria-labelledby="testi-label">
            <div className="container">

              <h2 className="headline-md section-title text-center" id="testi-label">Testimonial</h2>

              <ul className="slider">

                <li className="slider-item card-container">
                  <div className="card card-lg">
                    <figure className="card-media">
                      <img src={TestOne} width={100} height={100} loading="lazy" alt="Jesish Khadka" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <blockquote className="body-sm">
                        Working with this team has been a game-changer for my career. Their expertise in the field and dedication to client success is unmatched.
                      </blockquote>
                      <p className="client-name">Jesish Khadka</p>
                      <p className="client-title">Web Developer</p>
                    </div>
                  </div>
                </li>

                <li className="slider-item card-container">
                  <div className="card card-lg">
                    <figure className="card-media">
                      <img src={TestTwo} width={100} height={100} loading="lazy" alt="Minal Pariyar" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <blockquote className="body-sm">
                        Their attention to detail and commitment to excellence helped us launch a product that exceeded our expectations.
                      </blockquote>
                      <p className="client-name">Minal Pariyar</p>
                      <p className="client-title">Mern Developer</p>
                    </div>
                  </div>
                </li>

                <li className="slider-item card-container">
                  <div className="card card-lg">
                    <figure className="card-media">
                      <img src={TestThree} width={100} height={100} loading="lazy" alt="Pratik Tamang" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <blockquote className="body-sm">
                        The design team brought our vision to life with creativity and precision. I couldn't be happier with the results.
                      </blockquote>
                      <p className="client-name">Pratik Tamang</p>
                      <p className="client-title">UI/UX Designer</p>
                    </div>
                  </div>
                </li>

                <li className="slider-item card-container">
                  <div className="card card-lg">
                    <figure className="card-media">
                      <img src={TestFour} width={100} height={100} loading="lazy" alt="Abishek Neupane" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <blockquote className="body-sm">
                        Their professionalism and thorough understanding of our needs made them a valuable partner in our project.
                      </blockquote>
                      <p className="client-name">Abishek Neupane</p>
                      <p className="client-title">Chartered Accountant</p>
                    </div>
                  </div>
                </li>
              </ul>

            </div>
          </section>

        </article>
      </main>
      {/* <Footer/> */}
    </>
  )
}

export default Home;
