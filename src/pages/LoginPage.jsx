/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import LoginImage from '../assets/images/auth_illustration.png';
import LoginForm from '../components/Input/LoginForm';
import './page.css';

const LoginPage = () => {
  return (
    <div className="flex flex-col sm:flex-row md:gap-[50x] gap-10 min-h-screen items-center justify-center bg-deepDark">
      <div className="grid items-center gap-10 grid-cols-1">
        <div>
          <img
            className="mb-12 min-w-[250px]"
            src={ LoginImage }
            alt="auth_illustration"
          />
        </div>
          <div className="text-left w-full">
            <h1 className="mb-3 text-4xl font-bold lg:text-[40px] ">Facehook</h1>
            <p className="text-gray-600/95 lg:text-lg w-full">
              Create a social media app with features like, showing the post,
              post details, reactions, comments and profile.
            </p>
          </div>
      </div>
      <div className="card md:w-[85%] w-full">
        {/* login form */ }
        <LoginForm/>
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