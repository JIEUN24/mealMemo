import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code !== '') {
      setTimeout(() => {
        navigate('/main');
      }, 3000);
    }
  }, []);
  return (
    <Wrap>
      <PacmanLoader size={20} color="#fff" />
      <p>로그인 하는 중</p>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 400px;
  width: 100%;
  min-height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Cute Font', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;
  }
`;

export default LoginHandler;
