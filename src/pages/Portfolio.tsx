import React from 'react';
import PortfolioOne from '../assets/images/portfolio-1.png';
import PortfolioTwo from '../assets/images/portfolio-2.png';
import PortfolioThree from '../assets/images/portfolio-3.png';
import PortfolioFour from '../assets/images/portfolio-4.png';
import PortfolioFive from '../assets/images/portfolio-5.png';
import PortfolioSix from '../assets/images/portfolio-6.png';
import PortfolioSeven from '../assets/images/portfolio-7.png';
import PortfolioEight from '../assets/images/portfolio-8.png';
import PortfolioNine from '../assets/images/portfolio-9.jpg';
import PortfolioTen from '../assets/images/portfolio-10.png';
import PortfolioEleven from '../assets/images/portfolio-11.png';
import PortfolioTwelve from '../assets/images/portfolio-12.png';
import PortfolioThirteen from '../assets/images/portfolio-13.png';
import PortfolioFourteen from '../assets/images/portfolio-14.png';

const Portfolio: React.FC = () => {
  return (
    <>
      <main>
        <article>
          <section className="section portfolio" aria-labelledby="portfolio-label">
            <div className="container">
              <h2 className="section-title headline-md text-center" id="portfolio-label">Latest Projects</h2>
              <ul className="portfolio-list">
                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioOne} width="800" height="540" loading="lazy"
                        alt="Blog Platform" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Web Application</span>
                      <h3 className="title-md">Blog Platform</h3>
                      <p className="card-text">
                        I designed and developed this blog platform, focusing on user experience and scalability. It allows users to create, edit, and manage their blogs with ease.
                      </p>
                      <a href="https://github.com/charitraa/Blog_Platform" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioTwo} width="800" height="540" loading="lazy"
                        alt="Dhalal RealEstate" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Web Application</span>
                      <h3 className="title-md">Dhalal RealEstate</h3>
                      <p className="card-text">
                        This real estate platform offers property listings, search functionalities, and user-friendly interfaces for both buyers and sellers.
                      </p>
                      <a href="https://github.com/charitraa/Real_Estate" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioThree} width="800" height="540" loading="lazy"
                        alt="Catalog" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Website</span>
                      <h3 className="title-md">Catalog</h3>
                      <p className="card-text">
                        This catalog website was built to showcase products with detailed descriptions, images, and filtering options for easy navigation.
                      </p>
                      <a href="https://charitraa.github.io/yipl-frontend-challenge/" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioFour} width="800" height="540" loading="lazy"
                        alt="Marwadi Sewa Samiti Nepal" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Website</span>
                      <h3 className="title-md">Marwadi Sewa Samiti Nepal</h3>
                      <p className="card-text">
                        This website was developed for a non-profit organization, focusing on community engagement and event management features.
                      </p>
                      <a href="#" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioFive} width="800" height="540" loading="lazy"
                        alt="Supreme Associates Traders" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Website</span>
                      <h3 className="title-md">Supreme Associates Traders</h3>
                      <p className="card-text">
                        An e-commerce platform developed for a trading company, featuring product listings, secure payment gateways, and order management.
                      </p>
                      <a href="https://www.sat.com.np/" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioSix} width="800" height="540" loading="lazy"
                        alt="Expense Tracker" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Web Application</span>
                      <h3 className="title-md">Expense Tracker</h3>
                      <p className="card-text">
                        A web application for tracking daily expenses, providing insights through graphs and reports to help users manage their finances.
                      </p>
                      <a href="https://github.com/charitraa/Expense-Tracker" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioSeven} width="800" height="540" loading="lazy"
                        alt="Taxi Booking System" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Desktop Application</span>
                      <h3 className="title-md">Taxi Booking System</h3>
                      <p className="card-text">
                        A desktop application for managing taxi bookings, including features for driver assignment, fare calculation, and ride history.
                      </p>
                      <a href="https://github.com/charitraa/Taxi-Booking-System" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioEight} width="800" height="540" loading="lazy"
                        alt="Patan College" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Website</span>
                      <h3 className="title-md">PCPS College</h3>
                      <p className="card-text">
                        A modern, responsive website developed for Patan College, featuring course listings, student testimonials, and online application forms.
                      </p>
                      <a href="https://patancollege.edu.np/" target='_blank'className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioNine} width="800" height="540" loading="lazy"
                        alt="Hotel Booking System" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Desktop Application</span>
                      <h3 className="title-md">Hotel Booking System</h3>
                      <p className="card-text">
                        A desktop application for managing hotel bookings, complete with room availability checks, booking confirmations, and billing.
                      </p>
                      <a href="https://github.com/charitraa/Online-Hotel-Booking-System" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioTen} width="800" height="540" loading="lazy"
                        alt="Readers Hub" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Website</span>
                      <h3 className="title-md">Readers Hub</h3>
                      <p className="card-text">
                        A community-driven website for book lovers, featuring book reviews, reading challenges, and user-generated content.
                      </p>
                      <a href="https://charitraa.github.io/Coffee-Website/" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioEleven} width="800" height="540" loading="lazy"
                        alt="YouTube Clone" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Web Application</span>
                      <h3 className="title-md">YouTube Clone</h3>
                      <p className="card-text">
                        A YouTube clone web application that allows users to upload, view, and comment on videos, with features for searching and filtering content.
                      </p>
                      <a href="https://charitraa.github.io/YouTube-Clone/" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioTwelve} width="800" height="540" loading="lazy"
                        alt="Appointment Scheduler" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Web Application</span>
                      <h3 className="title-md">Thirft Shop</h3>
                      <p className="card-text">
                        The Thrift Shop project is an e-commerce platform designed to facilitate the buying and selling of second-hand items. The platform offers a user-friendly interface for both buyers and sellers, ensuring a seamless experience in listing products, browsing through available items, and making purchases.
                      </p>
                      <a href="https://github.com/charitraa/Thrift_Shop" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioThirteen} width="800" height="540" loading="lazy"
                        alt="Inventory Management System" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Websites</span>
                      <h3 className="title-md">Amazon Clone</h3>
                      <p className="card-text">
                       The Amazon Clone project is a full-featured e-commerce platform that replicates the core functionalities of Amazon. The platform provides a comprehensive online shopping experience, allowing users to browse, search, and purchase products across various categories.
                      </p>
                      <a href="https://charitraa.github.io/Amazon_Clone/" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="portfolio-card">
                    <div className="card-banner img-holder">
                      <img src={PortfolioFourteen} width="800" height="540" loading="lazy"
                        alt="CRM System" className="img-cover" />
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">Web Application</span>
                      <h3 className="title-md">Flex Fit Gym</h3>
                      <p className="card-text">
                        The Flex Fit Gym project is a dynamic and user-friendly web application designed to manage gym operations, memberships, and fitness classes. It offers a range of features tailored to both gym members and administrators, making it easy to maintain and grow a fitness business.
                      </p>
                      <a href="https://github.com/charitraa/Flex_Fit_Gym" target='_blank' className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Portfolio;
