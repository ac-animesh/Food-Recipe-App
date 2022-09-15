import React from "react";
import { Link } from "react-router-dom";

const ViewButton = ({ url }) => {
  return (
    <Link to={url} className='btn'>
      View
    </Link>
  );
};

export default ViewButton;
