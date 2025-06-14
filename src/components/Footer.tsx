import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">

          <ul className="social-list">

            <li>
              <a href="https://www.facebook.com/stharabi.charitra/" className="social-link" target='_blank'>
                <FaFacebook
                  color={'white'}
                  height="25px"
                  width="25px"
                />
              </a>
            </li>

            <li>
              <a href="https://x.com/ROYALXGAMER9" className="social-link" target='_blank'>
                <FaTwitter
                  color={'white'}
                  height="25px"
                  width="25px"
                />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/_charitraa_/" className="social-link" target='_blank'>
                <FaInstagram
                  color={'white'}
                  height="25px"
                  width="25px"
                />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/charitra-shrestha-78245b270/" className="social-link" target='_blank'>
                <FaLinkedin
                  color={'white'}
                  height="25px"
                  width="25px"
                />
              </a>
            </li>

            <li>
              <a href="https://github.com/charitraa" className="social-link" target='_blank'>
                <FaGithub
                  color={'white'}
                  height="25px"
                  width="25px"
                />
              </a>
            </li>

          </ul>

          <p className="text-center">&copy; 2024 copyright all right reserved</p>

        </div>
      </footer>
    </>
  )
}

export default Footer
