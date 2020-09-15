import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small bg-light pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h3 className="text-styled mb-1 pb-3">JazzShop</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              dolorum non quo repellat autem repellendus perferendis
              repudiandae, eius voluptates inventore deleniti, mollitia, nisi
              dolores amet omnis tenetur error maxime eveniet.
            </p>
          </div>

          <hr
            className="clearfix w-100 d-md-none pb-3"
            style={{ color: "black" }}
          />

          <div className="col-md-3 offset-1 mb-md-0 mb-3">
            <h5 className="">Useful Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-copyright text-center pt-1 pb-3">
        © 2020 Copyright:
        <a href="https://github.com/Jazz-hash">
          {" "}
          Muhammad Jazzel Mehmood - jazzelmehmood4@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
