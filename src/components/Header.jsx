import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Logo>Portfolio</Logo>
      <NavLinks>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </NavLinks>
      <ThemeToggle onClick={toggleTheme}>
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: rgba(15, 15, 26, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

export default Header;