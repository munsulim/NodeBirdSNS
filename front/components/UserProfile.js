import React from "react";
import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";

const dummy = {
  nickname: "Lewisia",
  Post: [],
  Followers: [],
  Followings: [],
  isLoggendin: false
};

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱
          <br />
          {user.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {user.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {user.Followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
    </Card>
  );
};

export default UserProfile;