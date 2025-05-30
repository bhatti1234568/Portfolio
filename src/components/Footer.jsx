import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <p>Designed with ❤️ by Me</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.background};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  p {
    margin: 0.5rem 0;
    opacity: 0.7;
  }
`;

export default Footer;