import { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5'

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const preloaderRef = useRef(null);
  const headerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current path

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.classList.add('loaded');
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarActive((prev) => !prev);
  };

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <>
      {/* Preloader */}
      <div
        className={`preloader${isLoaded ? ' loaded' : ''}`}
        ref={preloaderRef}
        data-preloader
      >
        <div className="preloader-circle"></div>
      </div>

      {/* Header */}
      <header
        className={`header${isHeaderActive ? ' active' : ''}`}
        data-header
        ref={headerRef}
      >
        <div className="container">
          <a className="logo" onClick={() => navigate('/')}>
            <img src={Logo} width={200} height={28} alt="Charitra home" />
          </a>

          {/* Navbar */}
          <nav className={`navbar${isNavbarActive ? ' active' : ''}`} data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a
                  className={`label-lg navbar-link has-after ${isActive('/')}`}
                  onClick={() => navigate('/')}
                >
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a
                  className={`label-lg navbar-link has-after ${isActive('/services')}`}
                  onClick={() => navigate('/services')}
                >
                  Services
                </a>
              </li>
              <li className="navbar-item">
                <a
                  className={`label-lg navbar-link has-after ${isActive('/portfolio')}`}
                  onClick={() => navigate('/portfolio')}
                >
                  Portfolio
                </a>
              </li>
              <li className="navbar-item">
                <a
                  className={`label-lg navbar-link has-after ${isActive('/blog')}`}
                  onClick={() => navigate('/blog')}
                >
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a
                  className={`label-lg navbar-link has-after ${isActive('/contact')}`}
                  onClick={() => navigate('/contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <a href="mailto:stharabi9862187405@gmail.com" className="btn btn-primary">
            Contact Now
          </a>

          <button
            className="nav-toggle-btn"
            aria-label="menu"
            data-nav-toggler
            onClick={toggleNavbar}
          >
            <IoMenuOutline
              color={'#00000'}
              size={25}
            />

          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
