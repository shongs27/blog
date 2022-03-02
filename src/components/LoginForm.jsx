export default function LoginForm({ loginField, handleChange, handleClick }) {
  const { email, password } = loginField;
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
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="button" onClick={handleClick}>
        인증
      </button>
    </div>
  );
}
