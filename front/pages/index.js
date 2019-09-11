import React from "react";
import { Form, Input, Button, Icon, Avatar } from "antd";
import Link from "next/link";
import { Card } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickName: "보르바"
      },
      content: "첫번째 게시글",
      img: "https://newsimg.sedaily.com/2017/09/15/1OL1CMWR9X_1.jpg"
    }
  ]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form encType="multipart/form-data" style={{ marginBottom: 20 }}>
          <Input.TextArea
            maxLength={140}
            placeholder="어떤 신기한 일이 있었나요?"
          />
          <div>
            <input type="file" multiple hidden></input>
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              짹짹
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map((v, i) => {
              return (
                <div key={v} style={{ display: "inline-block" }}>
                  <img
                    src={"http://localhost:3065/" + v}
                    style={{ width: "200px" }}
                    alt={V}
                  />
                  <div>
                    <Button>제거</Button>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      )}
      {dummy.mainPosts.map(c => {
        return (
          <Card
            key={+c.createdAt}
            cover={
              c.img && (
                <img
                  alt="example"
                  src={c.img}
                  style={{ maxHeight: "400px", width: "auto" }}
                />
              )
            }
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickName[0]}</Avatar>}
              title={c.User.nickName}
              description={c.content}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
