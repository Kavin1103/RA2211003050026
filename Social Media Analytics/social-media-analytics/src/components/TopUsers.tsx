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

const TopUsers: React.FC = () => {
  const [topUsers, setTopUsers] = useState<{ name: string; postCount: number }[]>([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const usersResponse = await getUsers();
        const users: User = usersResponse.data.users;

        const postCounts: { [key: string]: number } = {};
        for (const userId in users) {
          try {
            const postsResponse = await getPosts(userId);
            postCounts[userId] = postsResponse.data.posts.length;
          } catch (error) {
            postCounts[userId] = 0; // Handle API errors gracefully
          }
        }

        const sortedUsers = Object.entries(postCounts)
          .map(([userId, count]) => ({ name: users[userId], postCount: count }))
          .sort((a, b) => b.postCount - a.postCount)
          .slice(0, 5);

        setTopUsers(sortedUsers);
      } catch (error) {
        console.error('Error fetching top users:', error);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Top 5 Users by Post Count
      </Typography>
      <List>
        {topUsers.map((user, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${user.name} - ${user.postCount} posts`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TopUsers;