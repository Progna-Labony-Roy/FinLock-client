import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import useToken from '../Hooks/useToken';
import './Header.css';

const Header = () => {
    const { user, logOut } =useContext(AuthContext);

    const [token] =useToken(user?.email);
        
    const handleLogOut =()=>{
        logOut()
        .then( () =>{})
        .catch( error => console.error(error));
    }
    return (
        <div className='header'>
            <Link className='nav-links' to="/">Home</Link>
           {
            token?  <Link className='nav-links' to="/">Sign In</Link> :  <Link className='nav-links' to="/signin">Sign In</Link>
           }
            {
                user?.uid ? <button className='nav-links' onClick={handleLogOut}>SignOut</button> : <></>
            }
        </div>
    );
};

export default Header;