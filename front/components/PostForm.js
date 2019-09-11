import React from "react";
import { Input, Button, Form } from "antd";

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

const PostForm = () => {
  return (
    <Form encType="multipart/form-data" style={{ margin: "10px 0 20px" }}>
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
  );
};

export default PostForm;
