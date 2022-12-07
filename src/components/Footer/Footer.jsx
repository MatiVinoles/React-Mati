import React from "react";
import { CDBBox, CDBIcon } from "cdbreact";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="shadow footer">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <span className="ml-4 h5 mb-0 font-weight-bold brandName">
            QuieroCelu
          </span>
          <small className="ml-2 copy">
            &copy;{" "}
            <a
              className="developer"
              href="http://www.linkedin.com/in/matias-viñoles-609a3b18a"
            >
              Matías Viñoles
            </a>{" "}
            , 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <button className="p-2 socialMedia">
            <CDBIcon fab icon="facebook-f" />
          </button>
          <button className="mx-3 p-2 socialMedia">
            <CDBIcon fab icon="twitter" />
          </button>
          <button className="p-2 socialMedia">
            <CDBIcon fab icon="instagram" />
          </button>
        </CDBBox>
      </CDBBox>
    </footer>
  );
};
