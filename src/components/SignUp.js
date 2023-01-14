import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    
  const handleSubmitSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(result=>{
        const user =result.user;
        console.log("Registered user", user);
    })
    .catch( error =>{
        console.log(error);
    })
  };

  return (
    <div className="mt-20">
      <p className="">Sign Up</p>
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <form onSubmit={handleSubmitSignup}>
            <div className="shadow-sm -space-y-px">
              <div className="form-control">
                <label htmlFor="user-name" className="sr-only">
                  Name
                </label>
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block
                    w-full px-3 py-2 my-3 border border-gray-300
                    placeholder-gray-500 text-gray-900
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div className="form-control">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block
                    w-full px-3 py-2 my-3 border border-gray-300
                    placeholder-gray-500 text-gray-900
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
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
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                  py-2 px-4 my-3 border border-transparent text-sm font-medium
                  text-white bg-indigo-600 hover:bg-indigo-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/" className="text-indigo-600 hover:text-green-500">
                Sign In
              </Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
