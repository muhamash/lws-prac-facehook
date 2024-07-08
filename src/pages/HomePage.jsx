/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const HomePage = () =>
{
  const { auth } = useAuth();

  return (
    <div className="w-full">
      HomePage
      <Link to="/profile">
        profile
      </Link>
    </div>
  )
}

export default HomePage