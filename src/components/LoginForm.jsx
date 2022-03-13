import { message } from 'antd';

import styled from '@emotion/styled';

export default function LoginForm({ loginField, handleChange, handleClick }) {
  const { email, password } = loginField;

  function onChange(e) {
    const {
      target: { name, value },
    } = e;

    handleChange(name, value);
  }

  return (
    <div>
      <h1>로그인</h1>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>

      <button type="button" onClick={handleClick}>
        인증
      </button>
    </div>
  );
}
