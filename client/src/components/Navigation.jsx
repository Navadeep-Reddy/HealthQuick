import React from 'react';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { auth } from '../auth/config'; // Ensure this path points to your Firebase config
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page after logging out
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out.');
    }
  };

  return (
    <div
      className={`${
        sticky ? 'bg-DGreen' : 'bg-transparent'
      } w-[100%] mx-auto h-[60px] flex justify-between items-center px-[10%] fixed top-0 left-0 duration-700 z-10`}
    >
      <h1
        className={`text-[40px] font-semibold ${
          sticky ? 'text-BWhite' : 'text-DGreen'
        } duration-700`}
      >
        HealthQuick
      </h1>
      <ul
        className={`flex space-x-8 text-[20px] ${
          sticky ? 'text-BWhite' : 'text-DGreen'
        } duration-700 cursor-pointer`}
      >
        <li>
          <Link to="Home" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Chart" smooth={true} duration={500} offset={500}>
            Macro-Analysis
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className= " bg-DGreen py-1 text-BWhite rounded-md text-[18px] h-[30x] w-[100px] hover:bg-opacity-80 duration-300"
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
