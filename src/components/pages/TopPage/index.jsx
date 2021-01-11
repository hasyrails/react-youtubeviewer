import React from 'react';
import { Link } from 'react-router-dom';

const TopPage = () => (
  <>
    <h1>This is Top page!</h1>
    <Link to="/player">Player Page</Link>
  </>
);

export default TopPage;
