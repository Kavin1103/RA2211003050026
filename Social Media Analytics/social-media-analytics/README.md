# RA2211003050026

This repository contains the solutions for the Campus Hiring Evaluation - Frontend, consisting of two distinct problems implemented in separate folders. This README focuses on the Social Media Analytics problem, a responsive React-based frontend web application delivering real-time analytical insights from a social media platform's APIs.

## Folder Structure

- **`social-media-analytics/`**: Contains the solution for the Social Media Analytics problem.
- **`average-calculator/`**: Placeholder for the Average Calculator problem (not implemented here).

## Social Media Analytics Problem

### Overview

This project is a React-based frontend web application built with TypeScript, designed to provide real-time analytical insights from a social media platform's APIs. It features three pages:

1. **Top Users**: Displays the top five users with the highest number of posts.
2. **Trending Posts**: Shows posts with the maximum number of comments, including all posts tied for the highest comment count.
3. **Feed**: Presents a real-time feed of posts, with the newest posts appearing at the top, dynamically updating based on API responses.

### Technologies Used

- **React**: Frontend framework (version 18.x).
- **TypeScript**: Preferred for type safety and maintainability.
- **Material-UI**: CSS library for responsive and user-friendly styling.
- **React Router**: For navigation between pages.
- **Axios**: For making API requests with a 500ms timeout.
- **Node.js**: Runtime environment (version 16.x or higher recommended).

### Features

- **Top Users**: Efficiently calculates and displays the top 5 users by post count using an object-based counting mechanism and sorting.
- **Trending Posts**: Identifies posts with the highest comment counts by fetching and analyzing comments for all posts, handling ties appropriately.
- **Feed**: Implements a polling mechanism (every 5 seconds) to simulate real-time updates, sorting posts by ID (assumed as a proxy for recency).
- **Responsive Design**: Uses Material-UI for a consistent and user-focused experience across devices.
- **Performance**: Ensures API calls respect the 500ms timeout limit, with graceful error handling.

### Prerequisites

- **Node.js**: Version 16.x or higher.
- **npm**: Version 8.x or higher.
- A valid authorization token from the test server's `/test/auth` endpoint (replace in `src/services/api.ts`).

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/RA2211003050026.git
   cd RA2211003050026/social-media-analytics
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs all required packages, including:
   - `react`, `react-dom`
   - `react-router-dom`, `@types/react-router-dom`
   - `@mui/material`, `@emotion/react`, `@emotion/styled`
   - `axios`

3. **Configure API Token**:
   - Open `src/services/api.ts`.
   - Replace `'Bearer your_access_token_here'` with your actual token obtained from the test server's authorization API.

4. **Run the Application**:
   ```bash
   npm start
   ```
   - The app will launch at `http://localhost:3000`.
   - Use the navigation bar to switch between pages: `/top-users`, `/trending-posts`, and `/feed`.

### Project Structure

```
social-media-analytics/
├── src/
│   ├── components/
│   │   ├── TopUsers.tsx        # Component for displaying top users
│   │   ├── TrendingPosts.tsx   # Component for trending posts
│   │   └── Feed.tsx            # Component for real-time feed
│   ├── pages/
│   │   ├── TopUsersPage.tsx    # Page wrapper for TopUsers
│   │   ├── TrendingPostsPage.tsx # Page wrapper for TrendingPosts
│   │   └── FeedPage.tsx        # Page wrapper for Feed
│   ├── services/
│   │   └── api.ts              # API client with Axios configuration
│   ├── App.tsx                 # Main app component with routing
│   ├── index.tsx               # Entry point with React 18 root API
│   └── styles.css              # Global CSS styles
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

### Screenshots

- **Desktop View**:
  - *Top Users*: [Insert screenshot path or description]
  - *Trending Posts*: [Insert screenshot path or description]
  - *Feed*: [Insert screenshot path or description]
- **Mobile View**:
  - *Top Users*: [Insert screenshot path or description]
  - *Trending Posts*: [Insert screenshot path or description]
  - *Feed*: [Insert screenshot path or description]

*Note*: Screenshots are not included here but should be captured and placed in the repository (e.g., `screenshots/` folder) for submission.

### Development Notes

- **Coding Standards**: Follows production-grade practices with proper naming conventions, folder organization, and comments for readability.
- **API Integration**: Exclusively uses the test server APIs (e.g., `/users`, `/users/{id}/posts`, `/rests/{postId}/roments`) without third-party dependencies.
- **Real-Time Updates**: The Feed page polls the API every 5 seconds; adjust the interval in `src/components/Feed.tsx` if needed.
- **Error Handling**: Gracefully handles API errors by defaulting to zero counts or skipping failed requests.

### Submission Guidelines

- **Repository**: This is a public GitHub repository named `RA2211003050026`.
- **Commits**: Regular commits were made at logical milestones (e.g., component creation, routing setup, API integration).
- **Screenshots**: Include desktop and mobile views for each page in the repository.
- **Time**: Completed within the allotted 1.5 hours, with no additional time for pushing code.

### Troubleshooting

- **Compilation Errors**: Ensure all dependencies are installed and the API token is valid.
- **API Timeout**: If requests exceed 500ms, they are ignored as per the Axios configuration.
- **Routing Issues**: Verify `react-router-dom` is installed and routes are correctly defined in `App.tsx`.
