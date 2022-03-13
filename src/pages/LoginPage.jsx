import { useSelector, useDispatch } from 'react-redux';
import {
  changeLoginField,
  changePostField,
  logout,
  registerPost,
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
  const userId = useSelector((state) => state.login.userId);
  const { title, description } = useSelector((state) => state.page);

  function handleLoginChange(name, value) {
    dispatch(changeLoginField(name, value));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  function handlePostChange(name, value) {
    dispatch(changePostField(name, value));
  }

  function handleLogout() {
    dispatch(logout());
  }

  function handleUpload(form) {
    dispatch(registerPost(form));
  }

  return (
    <Container>
      {!accessToken ? (
        <LoginForm
          loginField={loginField}
          handleChange={handleLoginChange}
          handleClick={handleClick}
        />
      ) : (
        <LogoutForm
          form={{ userId, title, description }}
          handleChange={handlePostChange}
          handleLogout={handleLogout}
          handleUpload={handleUpload}
        />
      )}
    </Container>
  );
}
