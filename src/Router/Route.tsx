import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
const ROute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default ROute;
