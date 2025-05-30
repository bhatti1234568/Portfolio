import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Python', level: 70 },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h2>My Skills</h2>
      <SkillsContainer>
        {skillsData.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <SkillBar>
              <SkillLevel
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                level={skill.level}
              />
            </SkillBar>
            <SkillPercentage>{skill.level}%</SkillPercentage>
          </SkillItem>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
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

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const SkillBar = styled.div`
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const SkillLevel = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 5px;
`;

const SkillPercentage = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

export default Skills;