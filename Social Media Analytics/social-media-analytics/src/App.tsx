import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated Switch to Routes
import TopUsersPage from './pages/TopUsersPage';
import TrendingPostsPage from './pages/TrendingPostsPage';
import FeedPage from './pages/FeedPage';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './styles.css'; // Ensure this file exists in src/

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Social Media Analytics
          </Typography>
          <Button color="inherit" component={Link} to="/top-users">
            Top Users
          </Button>
          <Button color="inherit" component={Link} to="/trending-posts">
            Trending Posts
          </Button>
          <Button color="inherit" component={Link} to="/feed">
            Feed
          </Button>
        </Toolbar>
      </AppBar>
      <Routes> {/* Replaced Switch with Routes */}
        <Route path="/top-users" element={<TopUsersPage />} />
        <Route path="/trending-posts" element={<TrendingPostsPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/" element={<TopUsersPage />} />
      </Routes>
    </Router>
  );
};

export default App;