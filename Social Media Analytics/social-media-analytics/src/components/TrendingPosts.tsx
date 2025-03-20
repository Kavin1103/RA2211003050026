import React, { useEffect, useState } from 'react';
import { getUsers, getPosts, getComments } from '../services/api';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

interface User {
  [key: string]: string;
}

interface Post {
  id: number;
  userid: number;
  content: string;
}

interface Comment {
  id: number;
  postid: number;
  content: string;
}

const TrendingPosts: React.FC = () => {
  const [trendingPosts, setTrendingPosts] = useState<
    { post: Post; commentCount: number; userName: string }[]
  >([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const usersResponse = await getUsers();
        const users: User = usersResponse.data.users;

        const allPosts: Post[] = [];
        for (const userId in users) {
          try {
            const postsResponse = await getPosts(userId);
            allPosts.push(...postsResponse.data.posts);
          } catch (error) {
            console.error(`Error fetching posts for user ${userId}:`, error);
          }
        }

        const postCommentCounts = await Promise.all(
          allPosts.map(async (post) => {
            try {
              const commentsResponse = await getComments(post.id);
              return { post, commentCount: commentsResponse.data.coments.length };
            } catch (error) {
              return { post, commentCount: 0 };
            }
          })
        );

        const maxComments = Math.max(...postCommentCounts.map((p) => p.commentCount));
        const trending = postCommentCounts
          .filter((p) => p.commentCount === maxComments)
          .map((p) => ({ ...p, userName: users[p.post.userid.toString()] }));

        setTrendingPosts(trending);
      } catch (error) {
        console.error('Error fetching trending posts:', error);
      }
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Trending Posts
      </Typography>
      <List>
        {trendingPosts.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${item.userName}: "${item.post.content}"`}
              secondary={`${item.commentCount} comments`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TrendingPosts;