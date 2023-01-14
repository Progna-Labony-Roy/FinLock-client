import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const { user }=useContext(AuthContext);

    const url = `http://localhost:5000/users?email=${user?.email}`;

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url
        , {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
      );
      const data = await res.json();
      console.log(users)
      return data;
    },
  });

    return (
        <div>
            <p  className='py-20 font-semibold text-lg'>Welcome <span className='text-indigo-600'>{user?.displayName}</span></p>
        </div>
    );
};

export default Home;