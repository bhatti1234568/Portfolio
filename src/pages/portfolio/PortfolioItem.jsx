import React from 'react'
import { portfolio } from '../../Data'
import { RiLink } from 'react-icons/ri'
import '../../index.css'

const PortfolioItem = () => {
  return (
    <section className="profile section">
      <h2 className="section-title mt-5">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio-container container grid">
        {portfolio.map(({ id, img, title, discription, skills, link }) => {
          return (
            <article className="portfolio-card" key={id}>
              <a href={link} className="portfolio-title" target="_blank" rel="noopener noreferrer">
                <img src={img} alt={`${title} screenshot`} className="portfolio-img" />
              </a>

              <h3 className="portfolio-title">{title}</h3>
              <p className="portfolio-description">{discription}</p>

              <div className="portfolio-skills">
                {skills.map((skill, index) => {
                  return (
                    <img
                      src={skill}
                      alt="skill icon"
                      className="portfolio-skill"
                      key={index}
                    />
                  )
                })}
              </div>

              <a href={link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                <RiLink className="link-icon" />
                Visit Project
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PortfolioItem
