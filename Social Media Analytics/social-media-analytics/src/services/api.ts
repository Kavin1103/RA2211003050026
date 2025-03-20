import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';


const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc3MjkwLCJpYXQiOjE3NDI0NzY5OTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY5MDNkMDI4LTFlZmEtNDJiOC1iNTU2LWUyOWM5MjE4MGY0MSIsInN1YiI6InNzODUwNEBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJmOTAzZDAyOC0xZWZhLTQyYjgtYjU1Ni1lMjljOTIxODBmNDEiLCJjbGllbnRTZWNyZXQiOiJMbnBSSEtBQ2hiaEZFTnRGIiwib3duZXJOYW1lIjoiU3Jpa2F2aW4iLCJvd25lckVtYWlsIjoic3M4NTA0QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIyMTEwMDMwNTAwMjYifQ.ogQg8UBUTP6p9IvAg-imczxs2XFcI0-6i5CkwwBtbQ4';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
  timeout: 500, 
});

export const getUsers = () => api.get('/users');
export const getPosts = (userId: string) => api.get(`/users/${userId}/posts`);
export const getComments = (postId: number) => api.get(`/rests/${postId}/roments`);

export default api;