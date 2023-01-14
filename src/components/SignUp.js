import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useToken from "../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile }=useContext(AuthContext);
  const [signupError, setSignupError]=useState('');
  const navigate=useNavigate();
  const [createdUserEmail , setCreatedUserEmail] =useState('');
  // const [token] = useToken(createdUserEmail);
  
  // if(token){
  //   navigate('/')
  // }
  
  const handleSignup = (data) =>{ 
    createUser(data.email, data.password) 
    .then(result => {
      const user =result.user;
      setSignupError('');
      console.log(user);
      toast.success("User Created Successfully");
      navigate('/');
      const userInfo ={
        displayName:data.name
      }
      updateUserProfile(userInfo)
      .then( () =>{
        saveUser(data.name, data.email);
      })
      .catch(error => console.log(error))
    })   
    .catch(error => {
      console.log(error)
    setSignupError(error.message)
    })
  };

  const saveUser =(name,email) =>{
    const user ={ name,email};
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      setCreatedUserEmail(email);
      console.log('saveuser',data);
      navigate('/');
      getUserToken(email)
    })
  }

  const getUserToken = email =>{
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data =>{
      if(data.accessToken){
        localStorage.setItem('accessToken',data.accessToken)
      }
    })
  }
  
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(handleSignup)}>
        <div className="shadow-sm -space-y-px">
        <p className="signup-text my-3">
        Let's connect to your workspace.
        <br />
        Please enter your credentials to continue
      </p>
          <label htmlFor="password" className="sr-only">
                  Name
                </label>
          <input
            {...register("name", { required: "Please write your name" })}
            type="text"
            placeholder="Name"
            className="appearance-none rounded-none relative block
            w-full px-3 py-2 my-3 border border-gray-300
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}

          <label htmlFor="password" className="sr-only">
                  Email
                </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="text"
            name="email"
            placeholder="Email address"
            className="appearance-none rounded-none relative block
            w-full px-3 py-2 my-3 border border-gray-300
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <label htmlFor="password" className="sr-only">
                  Password
                </label>
          <input
            {...register("password", {
              required: "Please write your password",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters",
              },
            })}
            type="password"
            placeholder="Password"
            className="appearance-none rounded-none relative block
            w-full px-3 py-2 my-3 border border-gray-300
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <input
          type="submit"
          value="SignUp"
          className="group relative w-full flex justify-center
          py-2 px-4 my-3 border border-transparent text-sm font-medium
          text-white bg-indigo-600 hover:bg-indigo-700
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500"
        />
         <div>
          {
            signupError && <p className="text-red-500 py-1">{signupError}</p>
          }
        </div>
        <p>
          Already have an account{" "}
          <Link to="/signin" className="text-secondary">
            Please Sign in
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
