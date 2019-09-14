import React, { useCallback } from 'react';
import { Input, Button, Form } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { userInput } from '../pages/signup';
import { loginRequestAction } from '../reducers/user';

const LoginForm = () => {
  const [id, onChangeId] = userInput('');
  const [password, onChangePassword] = userInput('');
  const { isLogginin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(loginRequestAction({ id, password }));
  }, [id, password]);

  return (
    <Form onSubmit={onSubmit} style={{ padding: 10 }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          required
          onChange={onChangePassword}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={isLogginin}>
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
