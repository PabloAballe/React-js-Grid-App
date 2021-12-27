
import React, { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

import Grids from '../components/Grids';
 

const UsersList = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="user-list">
      <h1>
        Our Clients 👥
      </h1>
      <Grids/>
    </div>
  );
}

export default UsersList;
