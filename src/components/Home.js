import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const { user }=useContext(AuthContext);

    return (
        <div>
            <p  className='py-20 font-semibold text-lg'>Welcome <span className='text-indigo-600'>{user?.displayName}</span></p>
        </div>
    );
};

export default Home;