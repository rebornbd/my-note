import React from 'react'
import {
  Header,
  Footer
} from "../shared";


const MainLayout = ({ children }) => {
  const mainContainer = {
    minHeight: window.innerHeight,
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '50px 25%'
  };
  
  return (
    <>
      <Header />
      <div style={mainContainer}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default MainLayout;
