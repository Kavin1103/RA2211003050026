import React, { useEffect, useState } from 'react';
import { getUsers, getPosts } from '../services/api';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

interface User {
  [key: string]: string;
}

interface Post {
  id: number;
  userid: number;
  content: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<{ post: Post; userName: string }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const usersResponse = await getUsers();
        const users: User = usersResponse.data.users;

        const allPosts: { post: Post; userName: string }[] = [];
        for (const userId in users) {
          try {
            const postsResponse = await getPosts(userId);
            const userPosts = postsResponse.data.posts.map((post: Post) => ({
              post,
              userName: users[userId],
            }));
            allPosts.push(...userPosts);
          } catch (error) {
            console.error(`Error fetching posts for user ${userId}:`, error);
          }
        }

        // Sort by post ID (assuming higher ID means newer)
        allPosts.sort((a, b) => b.post.id - a.post.id);
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching feed:', error);
      }
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Poll every 5 seconds for real-time updates
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Real-Time Feed
      </Typography>
      <List>
        {posts.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${item.userName}: "${item.post.content}"`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Feed;