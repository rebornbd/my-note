import React from 'react'
import Profile from './Profile';
import { ThemeContext } from './ThemeContext';


const User = (props) => {
  return (
    <ThemeContext.Consumer>
      {(context) => <Profile {...props} myTheme={context} />}
    </ThemeContext.Consumer>
  )
}

export default User;
