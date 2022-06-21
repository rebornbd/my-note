# Context

#### intro
```
React context using steps:
  (01) Create context:
      const DemoContext = React.createContext()

  (02) Wrap component: 
      <DemoContext.Provider>
        <MyComponent />
      <DemoContext.Provider>

  (03) Gives a value context provider:
      <DemoContext.Provider value={ username: "rahim" }>
        <MyComponent />
      <DemoContext.Provider>
  
  (04) Read value within DemoContext.Provider wraping component
      option-1 (Higher order function):
      =================================
      const SomeComponent = (props) => {
        return (
          <DemoContext.Consumer>
            {(context) => <SomeInnerComponent {...props} name={context} >}
          </DemoContext.Consumer>
        )
      }

      const SomeInnerComponent = (props) => {
        const contextUser = props.name;

        return <></>
      }
      
      option-2 (useContext Hook):
      ===========================
      const SomeInnerComponent = (props) => {
        const contextUser = React.useContext(DemoContext);

        return <></>
      }
```

#### helping functions
```js
// ThemeContext.js
import React from "react";
export const themes = {
  light: {
    textColor: "#000000",
    bgColor: "#ffffff",
  },
  dark: {
    textColor: "#ffffff",
    bgColor: "#000000",
  }
}
export const ThemeContext = React.createContext(themes.light);


// User.js
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
```


## Create context | Warping context
#### `Users.js`
```js
import React from "react";
import { ThemeContext, themes } from "./ThemeContext";
import User from "./User";


const Users = () => {
  const users = [
    "Rakib",
    "Korim",
    "Rubel"
  ];


  return (
    <ThemeContext.Provider value={themes.dark}>
      {users && users.map(user => (
        <User user={user} key={user} />
      ))}
    </ThemeContext.Provider>
  )
}

export default Users;
```


## Read/Use context
#### `Profile.js`
```js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const Profile = ({ user, myTheme }) => {
  const theme = useContext(ThemeContext);
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
```
