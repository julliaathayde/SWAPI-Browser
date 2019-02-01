import React from 'react';
import { Link } from 'react-router-dom';
import './back.css';

const BackButton = ({path}) => {
  return (
    <Link to={`/${path}`}>
      <i class="fas fa-angle-double-left"></i>
    </Link>
  );
}

export default BackButton;