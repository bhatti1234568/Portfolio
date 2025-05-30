import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO at Company',
    text: 'Amazing work! Delivered beyond expectations.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Design Lead',
    text: 'Highly creative and professional. Would hire again!',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <TestimonialsSection id="testimonials">
      <h2>What People Say</h2>
      <TestimonialsContainer>
        <AnimatePresence mode="wait">
          <Testimonial
            key={testimonialsData[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>"{testimonialsData[current].text}"</p>
            <h3>{testimonialsData[current].name}</h3>
            <span>{testimonialsData[current].role}</span>
          </Testimonial>
        </AnimatePresence>
        <Controls>
          <button onClick={prevTestimonial}>
            <FiChevronLeft />
          </button>
          <button onClick={nextTestimonial}>
            <FiChevronRight />
          </button>
        </Controls>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.cardBg};
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Testimonial = styled(motion.div)`
  padding: 2rem;
  p {
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  span {
    opacity: 0.7;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  button {
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 1.2rem;
    }
  }
`;

export default Testimonials;