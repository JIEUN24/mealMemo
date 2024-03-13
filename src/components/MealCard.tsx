import React from 'react';
import styled from 'styled-components';

const MealCard = ({ item }) => {
  return (
    <Card>
      <div></div>
      <div>{item.name}</div>
    </Card>
  );
};

const Card = styled.div`
  width: 200px;
  height: 250px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:first-child {
    width: 90%;
    height: 150px;
    margin-top: 10px;
    border: 1px solid #fff;
  }

  & > div:nth-child(2) {
    width: 90%;
    margin-top: 10px;
    text-align: start;
  }

  &:hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;

export default MealCard;
