/* eslint-disable no-unused-vars */
import React from 'react'
import RegistrationImage from '../assets/icons/registration.svg'
import RegistrationForm from '../components/Input/RegistrationForm'

const RegistrationPage = () => {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-deepDark py-8"
    >
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          {/* <!-- illustration and title --> */}
          <div>
            {/* <!-- src="./assets/images/auth_illustration.png" --> */}
            <img
              className="mb-12 h-60 mx-auto"
              src={RegistrationImage}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl max-w-[452px] mx-auto font-bold md:text-left lg:text-[40px]">Facehook</h1>
              <p className="max-w-[452px] mx-auto md:text-left text-gray-400/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          {/* <!-- illustration and title ends --> */}
          {/* <!-- login form --> */}
          <div className="card">
            {/* <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]">
              <div className="form-control">
                <label className="auth-label" htmlFor="name">Name</label>
                <input className="auth-input" name="name" type="text" id="name" />
              </div>
              <div className="form-control">
                <label className="auth-label" htmlFor="email">Email</label>
                <input
                  className="auth-input"
                  name="email"
                  type="email"
                  id="email"
                />
              </div>
              <div className="form-control">
                <label className="auth-label" htmlFor="email">Password</label>
                <input
                  className="auth-input"
                  name="password"
                  type="password"
                  id="password"
                />
              </div>
              <div className="form-control">
                <label className="auth-label" htmlFor="confirmPassword">Retype Password</label>
                <input
                  className="auth-input"
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                />
              </div>
              <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
              >
                Register
              </button>
            </form> */}
            <RegistrationForm/>
            <div className="py-4 lg:py-4">
              <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                Already have an account?
                <a
                  className="hover:text-lwsGreen text-white transition-all hover:underline"
                  href="/login.html"
                > {" " }Login</a>
              </p>
            </div>
          </div>
          {/* <!-- login form ends --> */}
        </div>
      </div>
    </main>
  )
}

export default RegistrationPage