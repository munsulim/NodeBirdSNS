import React from 'react';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedIn, me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  
  return (
    <div>
      {me ? (
        <div>로그인 했습니다: {me.nickname} </div>
      ) : (
        <div> 로그아웃 했습니다.</div>
      )}
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c} post={c} />
      ))}
    </div>
  );
};

export default Home;
