import Content from '../layouts/Content';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import userImg from '../assets/userImg.png';

const Header = () => {
  const location = useLocation();

  // 랜딩 페이지 여부 확인
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    return null;
  }

  return (
    <StHeaderWrapper>
      <Content>
        <StContentWrapper>
          <div>mealMemo</div>
          <div>
            <img src={userImg} alt="User Image" />
          </div>{' '}
          {/* 이미지 추가 */}
        </StContentWrapper>
      </Content>
    </StHeaderWrapper>
  );
};

const StHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;
  background-color: #242424;
  z-index: 50;

  @media only screen and (max-width: 575px) {
    height: 80px;
  }
`;

const StContentWrapper = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 575px) {
    height: 80px;
  }

  & > div:first-child {
    width: 192px;
    display: block;
    margin: 0;
    font-family: 'Madimi One', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2.5em;
    line-height: 1.1;
    text-align: start;
    cursor: pointer;

    @media only screen and (max-width: 575px) {
      font-size: 2em;
    }
  }

  & > div:nth-child(2) {
    width: 45px;
    height: 45px;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #cdcdcd;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    img:hover {
      cursor: pointer;
      transform: scale(0.97);
    }
  }
`;

export default Header;
