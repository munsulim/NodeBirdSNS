import React from "react";
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from "antd";
import PropTypes from "prop-types";
import Link from "next/link";
import LoginForm from "./LoginForm";

const dummy = {
  nickname: "Lewisia",
  Post: [],
  Followers: [],
  Followings: [],
  isLoggendin: false
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {dummy.isLoggendin ? (
            <Card
              actions={[
                <div key="twit">
                  짹쨱
                  <br />
                  {dummy.Post.length}
                </div>,
                <div key="following">
                  팔로잉
                  <br />
                  {dummy.Followings.length}
                </div>,
                <div key="follower">
                  팔로워
                  <br />
                  {dummy.Followers.length}
                </div>
              ]}
            >
              <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
              />
            </Card>
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
