import React from 'react';
import { Card, Avatar,Button } from 'antd';
import { useSelector } from 'react-redux';

const dummy = {
  nickname: 'Lewisia',
  Post: [],
  Followers: [],
  Followings: [],
  isLoggendin: false,
};

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
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
      <Button>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
