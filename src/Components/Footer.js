import React from "react";

function Footer() {
  return (
    <footer
      className="fixed-bottom d-flex justify-content-center"
      style={{ backgroundColor: "#ba0f2b", height: "10rem" }}
    >
      <div
        className=""
        style={{
          marginTop: "1rem",
        }}
      >
        <div style={{ paddingTop: "6rem" }}>
          <div style={{ color: "white" }}>©2023 All rights reserved.</div>
          <a
            className="text-white"
            href="https://mdbootstrap.com/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            Marvel.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;