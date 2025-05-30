import React from "react";
import Profile from "../../assets/home.jpg";
import {Link} from 'react-router'
import {RiArrowRightLine} from 'react-icons/ri'
import '../../index.css'
const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Moeed Bhatti</span> <br /> Web Designer
        </h1>

        <p className="home-description">
          I am a Pakistanian based web designer & front-end developer focused on
          crafting clean & user-friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>

        <Link to='/about' className="button mt-5">
        More About ME
        <span className="button-icon">
          
        <RiArrowRightLine/>
        </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;
