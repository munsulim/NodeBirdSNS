import React, { useCallback } from "react";
import { Input, Button, Form } from "antd";
import Link from "next/link";
import { userInput } from "../pages/signup";

const LoginForm = () => {
  const [id, onChangeId] = userInput("");
  const [password, onChangePassword] = userInput("");

  const onSubmitFrom = useCallback(
    e => {
      e.preventDefault();
      console.log(id, password);
    },
    [id, password]
  );

  return (
    <Form onSubmit={onSubmitFrom}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlFor="submit" loading={false}>
          로그인
        </Button>
        <Link href="signup">
          <Button>회원가입</Button>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
