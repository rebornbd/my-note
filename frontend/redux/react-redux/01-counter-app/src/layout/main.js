import React from 'react';
import Header from '../components/Header';


const MainLayout = ({ children }) => {
  const styles = {
    minHeight: `${window.innerHeight}px`,
    marginTop: "40px",
    padding: "20px 50px"
  };


  return (
    <div>
      <Header />
      <div style={styles}>
        { children }
      </div>
    </div>
  )
}

export default MainLayout;
