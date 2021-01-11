import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

const Root = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #ff3300;
`;

const TopPage = () => (
  <Root>
    <Title>This is Top page!</Title>
    <Link to="/play">Player Page</Link>
  </Root>
);

export default TopPage;
