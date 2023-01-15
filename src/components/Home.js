import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  const { user, logOut } = useContext(AuthContext);
  useTitle("Home")

  const url = `https://zaperon-signin-server.vercel.app/users?email=${user?.email}`;

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        
      });
    //   if(res.status === 401 || res.status === 403){
    //     return logOut();
    //  }
      const data = await res.json();
      console.log(users);
      return data;
    },
  });

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-20 h-20 mx-auto mt-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <p className="py-3 font-semibold text-xl">
        Welcome ! <span className="text-indigo-600">{user?.displayName}</span>
      </p>
    </div>
  );
};

export default Home;
