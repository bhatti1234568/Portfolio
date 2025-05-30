import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: 'React + Node.js e-commerce platform with Stripe payments',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Interactive portfolio with animated mouse effects',
    tags: ['React', 'Framer Motion', 'Styled Components'],
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>My Projects</h2>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={{ y: -10 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Tags>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </Tags>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.background};
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }
  p {
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  span {
    background: rgba(110, 69, 226, 0.2);
    color: ${({ theme }) => theme.primary};
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    font-size: 0.8rem;
  }
`;

export default Projects;