import React, { useState } from 'react';
import peach from '../assets/peach.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MainPage = ({ img }) => {
  const [data, setData] = useState([
    { id: 1, name: '식단1', img: '../assets/peach.png' },
    { id: 2, name: '식단2', img: '../assets/peach.png' },
    { id: 3, name: '식단3', img: '' },
    { id: 4, name: '식단4', img: '../assets/peach.png' },
  ]);
  return (
    <Wrapper>
      <ContentWrap>
        <CardWrap>
          <CardBtn>
            <div>아침</div>
            {data[0].img === '' ? <FontAwesomeIcon className="icon" icon={faPlus} /> : <img src={peach} />}
          </CardBtn>
          <CardBtn>
            <div>점심</div>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </CardBtn>
        </CardWrap>
        <CardWrap>
          <CardBtn>
            <div>저녁</div>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </CardBtn>
          <CardBtn>
            <div>간식</div>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </CardBtn>
        </CardWrap>
      </ContentWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  width: 100%;
  background-color: #323232;
  /* background-color: #f4b752; */
  margin-top: 96px;

  @media only screen and (max-width: 575px) {
    margin-top: 80px;
  }
`;

const ContentWrap = styled.div`
  max-width: 1280px;
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;

  @media only screen and (max-width: 1360px) {
    padding: 0 40px;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    min-height: 450px;
    padding: 20px;
  }
`;

const CardWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardBtn = styled.div`
  max-width: 350px;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin: 5px;
  background-color: #1e1e1e;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 767px) {
    height: 250px;
  }

  @media only screen and (max-width: 575px) {
    height: 200px;
  }

  @media only screen and (max-width: 420px) {
    height: 150px;
  }

  div {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30%;
    border-radius: 10px;
    background-color: #461919;
  }

  .icon {
    width: 40px;
    height: 40px;

    &:hover {
      transform: scale(0.95);
    }
  }

  img {
    width: 50%;
    height: 50%;
  }
`;

export default MainPage;
