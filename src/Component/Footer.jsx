import React from "react";
import img1 from "../asset/github.svg";
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Think Js</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://github.com/" target={"blank"}><img src={img1} className="m-2" />
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
