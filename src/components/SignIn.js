import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useToken from "../Hooks/useToken";
import "./SignIn.css";

const SignIn = () => {
  const {user,signIn} =useContext(AuthContext);
  const [token] =useToken(user?.email);
  const navigate=useNavigate();
  const [loginError ,setLoginError] = useState('');

  if(token){
    navigate('/')
  }

  const handleSubmit = event =>{
    event.preventDefault();
    setLoginError('');
    const form =event.target;
    const email = form.email.value;
    const password= form.password.value;
    
    signIn(email, password)
    .then(result=>{
      const user =result.user;
      toast.success("Sign In successful")
    //   const currentUser ={
    //     email:user.email
    //   }

    //   form.reset();
    //   fetch('http://localhost:5000/jwt',{
    //   method : 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(currentUser)
    // })
    // .then(res =>res.json())
    // .then(data => {
    //   console.log(data);
    // })
  })
  .catch( (error) =>{
      console.error(error)
      setLoginError(error.message)
  })
  }

  return (
    <div className="mt-20">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

      <p  className='py-3 font-semibold text-xl'>Welcome !</p>
      </div>
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <form onSubmit={handleSubmit}>
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
          <p>New user? <span><Link to="/signup" className="text-indigo-600 hover:text-green-500"
                >
                  Create an account
                </Link></span> </p>
                <br />
                {
            loginError && <p className="text-red-500 py-1">{loginError}</p>
          }
        </div>
      
      </div>
    </div>
  );
};

export default SignIn;
