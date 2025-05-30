import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: '2020 - 2024',
    degree: 'Computer Science',
    institution: 'Harvard University',
  },
  {
    year: '2016 - 2020',
    degree: 'High School Diploma',
    institution: 'Tech High School',
  },
];

const Education = () => {
  return (
    <EducationSection id="education">
      <h2>Education</h2>
      <Timeline>
        {educationData.map((edu, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Year>{edu.year}</Year>
            <Content>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationSection>
  );
};

const EducationSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.primary};
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
  }
`;

const Year = styled.div`
  width: 45%;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 45%;
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  p {
    opacity: 0.8;
  }
`;

export default Education;