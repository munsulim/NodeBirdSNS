import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST
    })
  },[])

  return (
    <div>
      {me ? (
        <div>로그인 했습니다: {me.nickname} </div>
      ) : (
        <div> 로그아웃 했습니다.</div>
      )}
      {me && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c} post={c} />
      ))}
    </div>
  );
};

export default Home;
