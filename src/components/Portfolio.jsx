import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  // Toggle theme (dark/light)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Mouse movement effect
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x, y, id: Date.now() }];
        return newTrail.slice(-15); // Keep last 15 positions
      });

      // Generate particles
      if (particles.length < 50) {
        const newParticles = Array.from({ length: 3 }, () => ({
          x,
          y,
          size: Math.random() * 5 + 2,
          color: `hsl(${Math.random() * 360}, 80%, 60%)`,
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 - 2,
          life: 100,
        }));
        setParticles([...particles, ...newParticles]);
      }
    }
  };

  // Update particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            life: p.life - 2,
            size: p.size * 0.98,
          }))
          .filter(p => p.life > 0 && p.size > 0.5)
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  // Theme colors
  const themeColors = {
    dark: {
      background: '#0f0f1a',
      text: '#ffffff',
      primary: '#6e45e2',
      secondary: '#88d3ce',
    },
    light: {
      background: '#f5f5f7',
      text: '#333333',
      primary: '#6e45e2',
      secondary: '#88d3ce',
    },
  };

  return (
    <ThemeProvider theme={themeColors[theme]}>
      <PortfolioContainer
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={theme}
      >
        {/* Mouse Effects */}
        {mousePosition && (
          <>
            <CursorGlow
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                background: `radial-gradient(circle, ${themeColors[theme].primary} 0%, transparent 70%)`,
              }}
            />
            <CursorRing
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                borderColor: themeColors[theme].secondary,
              }}
            />
          </>
        )}

        {trail.map((pos, i) => (
          <TrailDot
            key={pos.id}
            style={{
              left: pos.x,
              top: pos.y,
              background: themeColors[theme].primary,
              opacity: i / trail.length,
              transform: `scale(${i / trail.length})`,
            }}
          />
        ))}

        {particles.map((p, i) => (
          <Particle
            key={i}
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.life / 100,
            }}
          />
        ))}

        {/* Header */}
        <Header>
          <Logo>Portfolio</Logo>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </Header>

        {/* Hero Section */}
        <HeroSection>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span>Moeed Bhatti</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Developer & UI/UX Designer
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            View My Work <FiArrowRight />
          </motion.button>
        </HeroSection>

        {/* Projects Section */}
        <ProjectsSection>
          <h2>Featured Projects</h2>
          <ProjectsGrid>
            {[1, 2, 3, 4].map((project) => (
              <ProjectCard key={project} whileHover={{ y: -10 }}>
                <h3>Project {project}</h3>
                <p>Description of project...</p>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>

        {/* Contact Section */}
        <ContactSection>
          <h2>Get In Touch</h2>
          <ContactForm>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </ContactForm>
          <SocialLinks>
            <a href="#"><FiGithub /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiMail /></a>
          </SocialLinks>
        </ContactSection>
      </PortfolioContainer>
    </ThemeProvider>
  );
};

// Styled Components
const PortfolioContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  padding: 2rem;
  transition: background 0.3s ease;
`;

const CursorGlow = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  filter: blur(30px);
  z-index: 0;
`;

const CursorRing = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
  }
`;

const TrailDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: opacity 0.3s;
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 5rem 0;
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
  button {
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
  }
`;

const ProjectsSection = styled.section`
  padding: 5rem 0;
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactSection = styled.section`
  padding: 5rem 0;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input, textarea {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.text};
  }
  button {
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default Portfolio;