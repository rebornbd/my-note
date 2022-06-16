import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayout = ({ children }) => {
  const styles = {
    minHeight: `${window.innerHeight - (40+30)}px`,
    marginTop: "70px",
    padding: "20px 50px",

    // backgroundColor: "#121212",
    backgroundColor: "#242424",
    color: "#f1f1f1",
  };

  const MainContent = () => {
    return (
      <div style={styles}>
        {children}
      </div>
    );
  };

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default MainLayout;
