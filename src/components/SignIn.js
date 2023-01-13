import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="mt-20">
      <p className="signup-text">
        Let's connect to your workspace.
        <br />
        Please enter your credentials to continue
      </p>
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <form action="#" method="POST">
            <div className="shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 my-3 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 my-3 border border-gray-300
                  placeholder-gray-500 text-gray-900 
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link className="text-indigo-600 hover:text-green-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 my-3 border border-transparent text-sm font-medium
                text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p>New user? <span><Link className="text-indigo-600 hover:text-green-500"
                >
                  Create an account
                </Link></span> </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
