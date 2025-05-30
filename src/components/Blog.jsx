import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'How to Build a Stunning Portfolio',
    excerpt: 'Learn the best practices for creating an impressive portfolio.',
    date: 'May 10, 2023',
  },
  {
    id: 2,
    title: 'React Hooks Explained',
    excerpt: 'A deep dive into React Hooks and their usage.',
    date: 'April 25, 2023',
  },
];

const Blog = () => {
  return (
    <BlogSection id="blog">
      <h2>Latest Articles</h2>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            whileHover={{ y: -10 }}
          >
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span>{post.date}</span>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogSection>
  );
};

const BlogSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.cardBg};
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
    opacity: 0.8;
  }
  span {
    font-size: 0.9rem;
    opacity: 0.6;
  }
`;

export default Blog;