import React from 'react';
import TrendingPosts from '../components/TrendingPosts';
import { Container } from '@mui/material';

const TrendingPostsPage: React.FC = () => {
  return (
    <Container>
      <TrendingPosts />
    </Container>
  );
};

export default TrendingPostsPage;