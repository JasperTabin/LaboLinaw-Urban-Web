import React from "react";
import "../styles/Inquiries.css";

export default function Inquiries() {
  return (
    <>
      <div class="banner">
        <div class="section__container banner__container">
          <h1>INQUIRE WITH US</h1>
          <p>
            We love meeting new people <br />
            and helping them
          </p>
        </div>
      </div>

      <div class="inquiries-container">
        <div class="right-side">
          <div class="Title">
            <h1>Get in Touch</h1>
            <div class="contact-form">
              <form action="Process_form.php" method="post">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Number"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        <div class="left-side">
          <div class="map-container">
            <iframe
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.689682946128!2d121.03428263465162!3d14.414126545281783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8e9e9825b11%3A0xc6e6f65241710b54!2sMuntinlupa%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1644054284254!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
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
