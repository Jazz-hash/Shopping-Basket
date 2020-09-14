import React from "react";
import Header from "./WebContainers/Header";
import Footer from "./WebContainers/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
