import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url }) => {
  return (
    <Link to={url} className='back-btn btn'>
      Back
    </Link>
  );
};

export default Button;
