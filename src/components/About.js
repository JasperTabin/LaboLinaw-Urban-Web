import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <div class="banner">
        <div class="section__container banner__container">
          <h4>ABOUT US</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="container">
        <div class="about-us">
          <p>
            We are an Interior Design practice <br />
            devoted to <span>simplicity</span>. We are led by <br />
            our desire to create <span>meaningful</span> <br />
            <span>spaces</span> that enhance the quality of <br />
            your life.
          </p>
        </div>

        <div class="featured" id="FEATURED">
          <div class="rectangle">
            <div class="image-container">
              <img src={"./Images/image29.jpg"} alt="Your Image" />
            </div>
            <div class="text-container">
              <h2>What We Do</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>

          <div class="rectangle">
            <div class="text-container">
              <h2>The End Result</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div class="image-container">
              <img
                src={process.env.PUBLIC_URL + "/Images/image30.jpg"}
                alt="Your Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="about-team">
        <h1>Meet the team</h1>

        <div class="team-member">
          <img
            src={process.env.PUBLIC_URL + "/Images/image34.png"}
            alt="Team Member 1"
          />
          <div class="overlay">
            <div class="top-section">
              <h3>GEROLIA, JOHN GABRIEL, SAN ANDRES</h3>
              <p class="position">Position</p>
            </div>
            <div class="middle-section">
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
            </div>
            <div class="bottom-section">
              <p class="email">dummyemail@gmail.com</p>
              <p class="number ">+630000000000</p>
            </div>
          </div>
        </div>

        <div class="team-member">
          <img
            src={process.env.PUBLIC_URL + "/Images/image35.png"}
            alt="Team Member 1"
          />
          <div class="overlay">
            <div class="top-section">
              <h3>RAGILES, TRISTAN BREN, VARGAS</h3>
              <p class="position">Position</p>
            </div>
            <div class="middle-section">
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
            </div>
            <div class="bottom-section">
              <p class="email">dummyemail@gmail.com</p>
              <p class="number ">+630000000000</p>
            </div>
          </div>
        </div>

        <div class="team-member">
          <img
            src={process.env.PUBLIC_URL + "/Images/image36.png"}
            alt="Team Member 1"
          />
          <div class="overlay">
            <div class="top-section">
              <h3>DE LUNA, MART DEXTER, SASI</h3>
              <p class="position">Position</p>
            </div>
            <div class="middle-section">
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
            </div>
            <div class="bottom-section">
              <p class="email">dummyemail@gmail.com</p>
              <p class="number ">+630000000000</p>
            </div>
          </div>
        </div>

        <div class="team-member">
          <img
            src={process.env.PUBLIC_URL + "/Images/image37.png"}
            alt="Team Member 1"
          />
          <div class="overlay">
            <div class="top-section">
              <h3>SARMIENTO, JERICO J, QUERIJERO</h3>
              <p class="position">Position</p>
            </div>
            <div class="middle-section">
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
            </div>
            <div class="bottom-section">
              <p class="email">dummyemail@gmail.com</p>
              <p class="number ">+630000000000</p>
            </div>
          </div>
        </div>

        <div class="team-member">
          <img
            src={process.env.PUBLIC_URL + "/Images/image38.png"}
            alt="Team Member 1"
          />
          <div class="overlay">
            <div class="top-section">
              <h3>TABIN, JASPER, PALPAL-LATOC</h3>
              <p class="position">Position</p>
            </div>
            <div class="middle-section">
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
            </div>
            <div class="bottom-section">
              <p class="email">dummyemail@gmail.com</p>
              <p class="number ">+630000000000</p>
            </div>
          </div>
        </div>

        <div class="team-member">
          <img
            src={process.env.PUBLIC_URL + "/Images/image39.png"}
            alt="Team Member 1"
          />
          <div class="overlay">
            <div class="top-section">
              <h3>CRESENCIO, RODOLFO MIGUEL, CARREON</h3>
              <p class="position">Position</p>
            </div>
            <div class="middle-section">
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
            </div>
            <div class="bottom-section">
              <p class="email">dummyemail@gmail.com</p>
              <p class="number ">+630000000000</p>
            </div>
          </div>
        </div>
      </div>

      <div class="About">
        <div class="About-title">
          <h1>ABOUT</h1>
        </div>

        <div class="About-Message">
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
          <div class="copyright">
            <p>Copyright © 2023 Mga Baliw. All rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
