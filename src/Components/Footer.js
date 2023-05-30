import React from "react";

function Footer() {
  return (
    <div className="mt-10">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#3f51b5" }}
      >
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Data provided by Marvel.
          <a class="text-white" href="https://marvel.com/">
            © 2023 MARVEL
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
