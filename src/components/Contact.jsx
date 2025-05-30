import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

  return (
    <ContactSection id="contact">
      <h2>Get In Touch</h2>
      <ContactContainer>
        <ContactForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        <SocialLinks>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <a href="mailto:example@email.com">
            <FiMail />
          </a>
        </SocialLinks>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.cardBg};
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text};
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text};
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
    transition: color 0.3s, transform 0.3s;
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-5px);
    }
  }
`;

export default Contact;