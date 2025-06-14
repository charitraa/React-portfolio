import React from 'react'
import { IoCodeSlashOutline, IoDesktopOutline, IoGitCompareOutline, IoGlobeOutline, IoPhonePortraitOutline, IoServerOutline } from 'react-icons/io5'
import serviceBg from '../assets/images/service-bg.png'
const Services: React.FC = () => {
  return (
    <>
      <main>
        <article>
          <section className="section service has-bg-image" aria-labelledby="service-label"
            style={{ backgroundImage: `url('${serviceBg}')` }}>
            <div className="container">
              <h2 className="section-title headline-md text-center" id="service-label">My Services</h2>
              <ul className="service-list">
                <li className="card-container">
                  <div className="card card-md" style={{ backgroundColor: "hsl(177, 39%, 72%)" }}>
                    <div className="card-media">
                      <IoCodeSlashOutline color={'#00000'} size={40} />
                    </div>
                    <div>
                      <h3 className="card-title title-sm">Web Design</h3>
                      <p className="body-sm">
                        Crafting visually appealing and user-friendly website designs that align with your brand identity and provide an engaging user experience.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card-container">
                  <div className="card card-md" style={{ backgroundColor: "hsl(41, 99%, 64%)" }}>
                    <div className="card-media">
                      <IoDesktopOutline color={'#00000'} size={40} />
                    </div>
                    <div>
                      <h3 className="card-title title-sm">Frontend Development</h3>
                      <p className="body-sm">
                        Developing responsive and interactive user interfaces using the latest technologies like HTML, CSS, JavaScript, and modern frameworks.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card-container">
                  <div className="card card-md" style={{ backgroundColor: "hsl(19, 97%, 85%)" }}>
                    <div className="card-media">
                      <IoGlobeOutline color={'#00000'} size={40} />
                    </div>
                    <div>
                      <h3 className="card-title title-sm">Backend Development</h3>
                      <p className="body-sm">
                        Building robust server-side applications that manage data, perform complex operations, and provide APIs for frontend applications.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card-container">
                  <div className="card card-md" style={{ backgroundColor: "hsl(221, 100%, 79%)" }}>
                    <div className="card-media">
                      <IoPhonePortraitOutline color={'#00000'} size={40} />
                    </div>
                    <div>
                      <h3 className="card-title title-sm">Mobile App Development</h3>
                      <p className="body-sm">
                        Creating intuitive and high-performance mobile applications for iOS and Android platforms, ensuring a seamless user experience on all devices.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card-container">
                  <div className="card card-md" style={{ backgroundColor: "hsl(76, 39%, 72%)" }}>
                    <div className="card-media">
                      <IoServerOutline color={'#00000'} size={40} />
                    </div>
                    <div>
                      <h3 className="card-title title-sm">Database Design & Management</h3>
                      <p className="body-sm">
                        Designing and managing efficient databases, ensuring data integrity, performance optimization, and seamless integration with applications.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card-container">
                  <div className="card card-md" style={{ backgroundColor: "hsl(245, 100%, 90%)" }}>
                    <div className="card-media">
                      <IoGitCompareOutline color={'#00000'} size={40} />
                    </div>
                    <div>
                      <h3 className="card-title title-sm">API Development & Integration</h3>
                      <p className="body-sm">
                        Developing and integrating APIs that enable seamless communication between different software systems, ensuring smooth data exchange.
                      </p>
                    </div>
                  </div>
                </li>


              </ul>

            </div>
          </section>

        </article>
      </main>
    </>
  )
}

export default Services
