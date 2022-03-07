import { useSelector, useDispatch } from 'react-redux';
import {
  changeLoginField,
  logout,
  registerArticle,
  requestLogin,
} from '../actions';

import LoginForm from '../components/LoginForm';
import LogoutForm from '../components/LogoutForm';

import styled from '@emotion/styled';

const Container = styled.div({});

export default function LoginPage() {
  const dispatch = useDispatch();
  const loginField = useSelector((state) => state.login.loginField);
  const accessToken = useSelector((state) => state.login.accessToken);

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;

    dispatch(changeLoginField(name, value));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  function handleLogout() {
    dispatch(logout());
  }

  function handleUpload(form) {
    dispatch(registerArticle(form));
  }

  return (
    <Container>
      {!accessToken ? (
        <LoginForm
          loginField={loginField}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ) : (
        <LogoutForm handleLogout={handleLogout} handleUpload={handleUpload} />
      )}
    </Container>
  );
}
