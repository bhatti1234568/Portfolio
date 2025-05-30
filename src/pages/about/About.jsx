import React from "react";
import Info from "../../components/Info";
import { RiDownload2Line } from "react-icons/ri";
import Cv from "../../pdf/Moeed-Bhatti-Cv.pdf";
import "../../index.css";
import Stats from "../../components/States";
import { skill } from "../../Data";
import SkillsItem from "../../components/SkillsItem";
import {resume} from '../../Data'
import ResumeItems from '../../components/ResumeItems'
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title mt-5">
          About <span>Me</span>
        </h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>

            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={Cv} download="Moeed-Cv" className="button">
              Download Cv
              <span className="button-icon">
                <RiDownload2Line />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="seprator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>
        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Frontend Developer</h3>

            <div className="skills-item grid">
              {skill.map((val) => {
                if (val.category === "developer") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Web Designer</h3>

            <div className="skills-item grid">
              {skill.map((val) => {
                if (val.category === "designer") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="seprator"></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center">
          Experience & Education
        </h3>

        <div className="resume-container grid">
          <div className="resume-group grid">
            {resume.map((val) =>{
              if(val.category ==='experience'){
                return <ResumeItems key={val.id} {...val} />
              }
            })}
          </div>

          <div className="resume-group grid">
            {resume.map((val) =>{
              if(val.category ==='education'){
                return <ResumeItems key={val.id} {...val} />
              }
            })}
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
