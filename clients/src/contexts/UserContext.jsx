import { createContext } from "react"
// context is like container , that hold information that we want to share a cross the project of
// client side , that i mean is that allow us to save values from the component , function,etc
// and make them available across this application
const UserContext = createContext();
export default UserContext;

// // UserContextProvider.js (or wherever you define your context provider)
// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// const UserContextProvider = ({ children }) => {
//   const [loggedInUser, setLoggedInUser] = useState({});
//   // Other context logic...

//   return (
//     <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;

