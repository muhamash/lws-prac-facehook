/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import LoginImage from '../assets/images/auth_illustration.png';
import './page.css';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-deepDark">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <div>
          <img
            className="mb-12 max-w-[500px]"
            src={ LoginImage }
            alt="auth_illustration"
          />
          <div className="text-left">
            <h1 className="mb-3 text-4xl font-bold lg:text-[40px] ">Facehook</h1>
            <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
              Create a social media app with features like, showing the post,
              post details, reactions, comments and profile.
            </p>
          </div>
        </div>
      </div>
      <div className="card w-full">
        {/* login form */ }
      
        {/* after the log in form */ }
        <div className="py-4">
          <p className="text-center text-xs text-gray-600/95 lg:text-sm">
            Don’t have account?
            <Link
              to={ '/registration' }
              className="text-white transition-all hover:text-lwsGreen hover:underline"
            >Create New</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage