import React, { useState } from 'react';
import PostCard from './PostCard';

const PostList = () => {
  const [posts] = useState([
    { id: 1, name: 'James Manalang' },
    { id: 2, name: 'Jhona De Belen' },
    { id: 3, name: 'Sophia Santiago' },
  ]);
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} name={post.name} />
      ))}
    </div>
  );
};

export default PostList;
