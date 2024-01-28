import React, { useEffect, useRef } from "react";
import "flickity/css/flickity.css";
import Flickity from "flickity";
import "../styles/Projects.css";

export default function Project8() {
  const flickityRef = useRef(null);

  useEffect(() => {
    if (flickityRef.current) {
      const flickityInstance = new Flickity(flickityRef.current, {
        cellAlign: "center",
        contain: true,
        wrapAround: true,
      });

      return () => {
        flickityInstance.destroy();
      };
    }
  }, []);

  return (
    <>
      <div ref={flickityRef} className="main-carousel">
        <div class="carousel-cell">
          <img src={process.env.PUBLIC_URL + "/images/Project8/P1.jpg"} />
        </div>
        <div class="carousel-cell">
          <img src={process.env.PUBLIC_URL + "/images/Project8/P2.jpg"} />
        </div>
        <div class="carousel-cell">
          <img src={process.env.PUBLIC_URL + "/images/Project8/P3.jpg"} />
        </div>
        <div class="carousel-cell">
          <img src={process.env.PUBLIC_URL + "/images/Project8/P4.jpg"} />
        </div>
        <div class="carousel-cell">
          <img src={process.env.PUBLIC_URL + "/images/Project8/P5.jpg"} />
        </div>
        <div class="carousel-cell">
          <img src={process.env.PUBLIC_URL + "/images/Project8/P6.jpg"} />
        </div>
      </div>

      <div class="message">
        <div class="message-first-half">
          <h2 class="headline-font">THE PROJECT</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div
          className="video-container"
          style={{ margin: "30px", padding: "10px" }}
        >
          <iframe
            width="550"
            height="450"
            src="https://www.youtube.com/embed/BltYZJ4kvBY"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div class="Project">
        <div class="Project-Image">
          <div
            class="ProjectItem image"
            data-title="Portrait 1"
            data-description="Description 1"
          >
            <img src={process.env.PUBLIC_URL + "/images/Project8/P8.jpg"} />
          </div>

          <div
            class="ProjectItem image"
            data-title="Portrait 2"
            data-description="Description 2"
          >
            <img src={process.env.PUBLIC_URL + "/images/Project8/P9.jpg"} />
          </div>

          <div
            class="ProjectItem image"
            data-title="Portrait 3"
            data-description="Description 3"
          >
            <img src={process.env.PUBLIC_URL + "/images/Project8/P10.jpg"} />
          </div>
        </div>
      </div>

      <div class="Projects">
        <div class="Project-Images">
          <div
            class="ProjectItems image"
            data-title="Landscape 1"
            data-description="Description 4"
          >
            <img src={process.env.PUBLIC_URL + "/images/Project8/P4.jpg"} />
          </div>

          <div
            class="ProjectItems image"
            data-title="Landscape 2"
            data-description="Description 5"
          >
            <img src={process.env.PUBLIC_URL + "/images/Project8/P3.jpg"} />
          </div>

          <div
            class="ProjectItems image"
            data-title="Landscape 3"
            data-description="Description 6"
          >
            <img src={process.env.PUBLIC_URL + "/images/Project8/P5.jpg"} />
          </div>
        </div>
      </div>

      <div id="enlarged-image-container">
        <div id="enlarged-image-content" onclick="closeModal()">
          <img id="enlarged-image" />
        </div>
      </div>

      <div class="content6">
        <div class="footer">
          <div class="col">
            <h4>GET IN TOUCH</h4>
            <ul>
              <li>
                <a href="#">Dummyemail@gmail.com</a>
              </li>
              <li>
                <a href="#">Dummyemail@gmail.com</a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h4>FOLLOW US</h4>
            <ul>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Link In</a>
              </li>
              <li>
                <a href="">Gmail</a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h4>LOCATION</h4>
            <ul>
              <li>
                <a href="#">Muntinlupa City</a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h4>PORTFOLIO</h4>
            <ul>
              <li>
                <a href="Project6.html">SAGE EICHILER</a>
              </li>
              <li>
                <a href="Project11.html">HIDE AND SEEK HOUSE</a>
              </li>
              <li>
                <a href="Project2.html">SARATOGA WHIMSY HOUSE</a>
              </li>
              <li>
                <a href="Project4.html">SAN FRANCISCO EDWARDIN</a>
              </li>
              <li>
                <a href="Project15.html">CAMPBELL MODERN HOME</a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h4>CONTACT</h4>
            <ul>
              <li>
                <a href="#">+630000000000</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="Logos">
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div class="copyright">
            <p>Copyright © 2023 Mga Baliw. All rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
