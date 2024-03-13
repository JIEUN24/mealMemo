import React from 'react';
import styled from 'styled-components';

const Content = (props: { children: React.ReactNode }) => {
  return <StContentWrapper>{props.children}</StContentWrapper>;
};

const StContentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1280px;

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export default Content;
