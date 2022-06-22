import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const Profile = ({ user, myTheme }) => {
  const theme = useContext(ThemeContext);
  console.log("myTheme", myTheme);

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    margin: '1px',
    padding: '5px',
    color: `${theme.textColor}`,
    backgroundColor: `${theme.bgColor}`
  };


  return (
    <div style={styles}>
      <span>{user}</span>
    </div>
  )
}

export default Profile;
