import React from "react";
import "../styles/Services.css";

export default function Services() {
  return (
    <>
      <div class="banner">
        <h4>EXPLORE URBAN SERVICES</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>

      <div class="section__container display__container">
        <div class="display__col">
          <img
            className="Images"
            src={`${process.env.PUBLIC_URL}/Images/image22.jpg`}
            alt="display"
          />

          <div class="display__content">
            <h4>Agricultural Design</h4>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <img
            className="Images"
            src={`${process.env.PUBLIC_URL}/Images/image23.jpg`}
            alt="display"
          />
        </div>
        <div class="display__col">
          <div class="display__content">
            <h4>Furnishing Services</h4>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <img
            className="Images"
            src={`${process.env.PUBLIC_URL}/Images/image24.jpg`}
            alt="display"
          />

          <div class="display__content">
            <h4>Interior Design</h4>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div class="display__col">
          <img
            className="Images"
            src={`${process.env.PUBLIC_URL}/Images/image25.jpg`}
            alt="display"
          />

          <div class="display__content">
            <h4>Supervision Services</h4>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <img
            className="Images"
            src={`${process.env.PUBLIC_URL}/Images/image26.jpg`}
            alt="display"
          />
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
