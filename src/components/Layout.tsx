import React from "react";
import Header from "./WebContainers/Header";
import Footer from "./WebContainers/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="main">
        <header style={{ padding: "30px 40px" }}>
          <Header />
        </header>
        <section className="container-fluid m-0 p-0">{children}</section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
