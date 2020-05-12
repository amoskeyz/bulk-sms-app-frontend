import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
import Welcome from '../../Components/Welcome';
import Section from '../../Components/Section';
import Prices from '../../Components/Prices';
import Footer from '../../Components/Footer';
import Service from '../../Components/Service';
import Account from '../../Components/Account';
import './Home.scss';
import Nav from '../../Components/Nav';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, []);
  return (
    <div className="home">
      <Nav scroll={scrollY} />
      <Welcome />
      <Section scroll={scrollY} />
      <Prices scroll={scrollY} />
      <Account />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
