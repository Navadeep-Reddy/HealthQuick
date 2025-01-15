import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext)


const UserProvider = ({children}) => {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (details) => {
    setUserDetails(details)
  }

  return (
    <UserContext.Provider value = {{userDetails, updateUserDetails}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
