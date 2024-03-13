import mealLogo from '../assets/mealLogo.png';
import styled from 'styled-components';

const LandingPage = () => {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Wrap>
      <div>
        <img src={mealLogo} className="logo" alt="meal logo" />
      </div>
      <Title>mealMemo</Title>
      <ButtonBox className="card">
        <button onClick={kakaoLogin}>입장하기</button>
      </ButtonBox>
      <p className="read-the-docs">Copyright © JIEUN | JUNHYUK</p>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 300px;
  height: 95vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 17em;
    will-change: filter;
    transition: filter 300ms;
  }

  img:hover {
    filter: drop-shadow(0 0 1em #61dafbaa);
    transform: scale(1.01);
  }
`;

const Title = styled.h1`
  display: block;
  margin: 0;
  font-family: 'Madimi One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.2em;
  line-height: 1.1;
`;

const ButtonBox = styled.div`
  padding: 2em 0;
  width: 100%;

  button {
    width: 100%;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    border-radius: 8px;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export default LandingPage;
