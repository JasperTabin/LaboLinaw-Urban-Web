import React from "react";
import "../styles/style.css";

export default function Home() {
  return (
    <>
      <div class="main">
        <div class="container">
          <div class="content">
            <div class="bg-text">
              <h1 class="text">01</h1>
            </div>
            <div class="main-text">
              <p class="text1">INTERIOR</p>
              <p class="text2">Design</p>
              <p class="text3">
                The stylish interior makes us to spend more time in it. <br />
                We present interesting sets to create an house. we <br />
                choose the right colors according to our own taste.
              </p>
              <p class="text4">Read More</p>
              <p class="text5">
                Serenity in Shades <br />
                <br />
                Discover the tranquil beauty of this monochrome living room.
              </p>
            </div>
          </div>

          <div class="content2">
            <div class="main-text2">
              <p class="text1">Providing Everything You Need</p>
              <div class="text-group">
                <p class="text2">
                  WE HELP TO GET THE
                  <span class="highlight"> BEST CREATIVE SOLUTIONS</span> FOR
                  YOUR
                  <br />
                  SPACE
                </p>
                <p class="text3">
                  Providing the best design solution for your space is our core
                  business This space could be a house, an <br />
                  office building or even a coffee corner. we deeply believe
                  that good design can make your life and <br />
                  work better. therefore, this became our mission <br />
                  <br />
                  Whether in a consultation session, or a full design service or
                  even a site visit we'll be always thinking <br />
                  about the best solution of a space that would make users 'life
                  better
                </p>
              </div>
            </div>

            <div class="vector1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="3"
                viewBox="0 0 83 3"
                fill="none"
              >
                <path d="M82.5 1.85315H0" stroke="#AC915D" stroke-width="2" />
              </svg>
            </div>

            <div class="vector2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="3"
                viewBox="0 0 83 3"
                fill="none"
              >
                <path d="M82.5 1.85315H0" stroke="#AC915D" stroke-width="2" />
              </svg>
            </div>

            <div class="images">
              <div
                class="image"
                onclick="enlargeImage('Images/image 8.png', 'DINING & KITCHEN', 'Description for Dining & Kitchen.')"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/image8.png`}
                  alt="DINING & KITCHEN"
                />
                <p class="text2">DINING & KITCHEN</p>
              </div>

              <div
                class="image"
                onclick="enlargeImage('Images/image 10.png', 'BEDROOM', 'Description for Bedroom.')"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Images/image 10.png"}
                  alt="DINING & KITCHEN"
                />
                <p class="text2">BEDROOM</p>
              </div>

              <div
                class="image"
                onclick="enlargeImage('Images/image 7.png', 'LOUNGE ROOM', 'Description for Lounge Room.')"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Images/image 7.png"}
                  alt="DINING & KITCHEN"
                />
                <p class="text2">LOUNGE ROOM</p>
              </div>

              <div
                class="image"
                onclick="enlargeImage('Images/image 9.png', 'KITCHEN', 'Description for Kitchen.')"
              >
                <img
                  src={process.env.PUBLIC_URL + "/Images/image 9.png"}
                  alt="DINING & KITCHEN"
                />
                <p class="text2">KITCHEN</p>
              </div>
            </div>

            <div class="enlarged-image-container" id="enlarged-image-container">
              <img id="enlarged-image" alt="" />
              <div class="enlarged-image-details">
                <h2 id="enlarged-image-title"></h2>
                <p id="enlarged-image-description"></p>
              </div>
            </div>
          </div>

          <div class="content3">
            <div class="main-text3">
              <p class="text1">FEATURED PROJECTS</p>
            </div>

            <div class="vector">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="660"
                height="2"
                viewBox="0 0 660 2"
                fill="none"
              >
                <path d="M660 1H0" stroke="#AC915D" />
              </svg>
            </div>

            <div class="images">
              <div onclick="enlargeImage('Images/image 11.png', 'BATHROOM', 'Aestethic bathroom design.')">
                <img
                  src={process.env.PUBLIC_URL + "/Images/image 11.png"}
                  alt="DINING & KITCHEN"
                />
                <p class="text2">BATHROOM</p>
                <h2 class="description-title">BATHROOM</h2>
                <p class="description">Aestethic bathroom design</p>
              </div>

              <div onclick="enlargeImage('Images/image 12.png', 'LIVING ROOM', 'A simplistic living room design.')">
                <img
                  src={process.env.PUBLIC_URL + "/Images/image 12.png"}
                  alt="DINING & KITCHEN"
                />
                <p class="text2">LIVING ROOM</p>
                <h2 class="description-title">LIVING ROOM</h2>
                <p class="description">A simplistic living room design</p>
              </div>

              <div onclick="enlargeImage('Images/image 15.png', 'DINING ROOM', 'A contemporary Dining room design.')">
                <img
                  src={process.env.PUBLIC_URL + "/Images/image 15.png"}
                  alt="DINING & KITCHEN"
                />
                <p class="text2">DINING ROOM</p>
                <h2 class="description-title">DINING ROOM</h2>
                <p class="description">A contemporary Dining room design</p>
              </div>
            </div>
          </div>

          <div class="content4">
            <div class="columns">
              <div>
                <p class="text1">
                  PRIOR TO DESIGN. WE SIT WITH YOU <br />
                  TO UNDERSTAND YOUR NEEDS
                  <br />
                  DESIGN PREFERENCES
                </p>
                <div class="image-button">
                  <div class="image">
                    <img
                      src={process.env.PUBLIC_URL + "/Images/image 16.png"}
                      alt="DINING & KITCHEN"
                    />
                  </div>
                  <a href="Contact.html">
                    <button class="btn">START INQUIRING NOW</button>
                  </a>
                </div>
              </div>

              <div class="column2">
                <p class="text2">
                  DESIGN SERVICES & CONTRACTING <br />& FITOUTING SERVICES
                </p>
                <div class="boxes">
                  <div class="box">
                    <div class="boxbox">
                      <p>Agricultural Design</p>
                      <ul class="items">
                        <li>3D Exterior renders</li>
                        <li>Floor Plans</li>
                        <li>Sections and Elevations</li>
                        <li>3D Exterior renders</li>
                      </ul>
                    </div>
                  </div>

                  <div class="box">
                    <div class="boxbox">
                      <p>Furnishing Services</p>
                      <ul class="items">
                        <li>Furniture Layouts</li>
                        <li>Mood Boards</li>
                        <li>Furniture & Fabrics Selection</li>
                        <li>3D Exterior renders</li>
                        <li>Accessories Selection</li>
                      </ul>
                    </div>
                  </div>

                  <div class="box">
                    <div class="boxbox">
                      <p>Interior Design</p>
                      <ul class="items">
                        <li>Mood Boards</li>
                        <li>3D Interior</li>
                        <li>Furniture Layouts</li>
                        <li>Celling and Lightning layout</li>
                        <li>Full details drawings</li>
                        <li>Bill of Quantities</li>
                      </ul>
                    </div>
                  </div>

                  <div class="box">
                    <div class="boxbox">
                      <p>Supervision Services</p>
                      <ul class="items">
                        <li>Site Visits</li>
                        <li>Material Section</li>
                        <li>Design Coordination</li>
                      </ul>
                    </div>
                  </div>

                  <div class="box">
                    <div class="boxbox">
                      <p>
                        1 Hour <br />
                        Consultation Session
                      </p>
                      <ul class="items">
                        <li>
                          If you're not sure about your space deisgn feel free
                          to book an hour in office or online with us. during
                          the session we provide with sketches and solutions
                          that fits your needs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content5">
            <div class="main-text5">
              <div class="vect1">
                <div class="vector1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="4"
                    viewBox="0 0 86 4"
                    fill="none"
                  >
                    <path
                      d="M85.5 2H0H42.75H85.5Z"
                      stroke="#AC915D"
                      stroke-width="3"
                    />
                  </svg>
                </div>

                <p class="text">
                  EXPLORE PROJECTS <br />
                  WE ARE PROUD OF
                </p>

                <div class="vector2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="4"
                    viewBox="0 0 86 4"
                    fill="none"
                  >
                    <path
                      d="M85.5 2H0H42.75H85.5Z"
                      stroke="#AC915D"
                      stroke-width="3"
                    />
                  </svg>
                </div>
              </div>

              <div class="button">
                <a href="Project.html">
                  <button class="btn1">PROJECT</button>
                </a>
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
        </div>
      </div>
    </>
  );
}
