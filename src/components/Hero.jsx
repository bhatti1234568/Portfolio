import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <HeroSection id="home">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span>Alex</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Full-Stack Developer & UI/UX Designer
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <HeroButton to="projects" smooth={true} duration={500}>
          View My Work <FiArrowRight />
        </HeroButton>
      </motion.div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    span {
      color: ${({ theme }) => theme.primary};
    }
  }
  p {
    font-size: 1.5rem;
    opacity: 0.8;
    margin-bottom: 2rem;
  }
`;

const HeroButton = styled(Link)`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

export default Hero;