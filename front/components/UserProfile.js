import React, { useCallback } from 'react';
import { Card, Avatar,Button } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { LOG_OUT_REQUEST } from '../reducers/user'

const dummy = {
  nickname: 'Lewisia',
  Post: [],
  Followers: [],
  Followings: [],
  isLoggendin: false,
};

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogOut = useCallback( e => {
    dispatch({type: LOG_OUT_REQUEST,})
  },[])
  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱
          <br />
          {me.Posts.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick= {onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
