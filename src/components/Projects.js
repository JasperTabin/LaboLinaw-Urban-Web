import React from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div class="banner">
        <div class="section__container banner__container">
          <h4>URBAN INTERIROS PROJECT</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="CategoryContainer">
        <div class="Gallery">
          <Link to="/Project1" className="GalleryItem">
            <div className="ImageOverlay">
            <img
  src={`${process.env.PUBLIC_URL}/images/Project/P1.jpg`}
  alt="Image 1"
/>

            </div>
            <div className="ImageText">
              <h2>AUSTRALIAN MINIMALIST GROUND UP</h2>
            </div>
          </Link>

          <Link to="/Project2" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project2.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>SARATOGA WHIMSY HOUSE</h2>
            </div>
          </Link>

          <Link to="/Project3" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project3.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>ALAMEDA BATHROOMS</h2>
            </div>
          </Link>

          <Link to="/Project4" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project4.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>SAN FRANCISCO EDWARDIAN</h2>
            </div>
          </Link>

          <Link to="/Project5" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project5.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>TONAL SINGLE FAMILY HOME</h2>
            </div>
          </Link>

          <Link to="/Project6" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project6.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>SAGE EICHLER</h2>
            </div>
          </Link>

          <Link to="/Project7" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project7.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>EARTHY MACKAY HOUSE</h2>
            </div>
          </Link>

          <Link to="/Project8" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project8.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>MIDCENTURY CARIBBEAN HOME</h2>
            </div>
          </Link>

          <Link to="/Project9" className="GalleryItem">
            <div className="ImageOverlay">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Project/Project9.jpg`}
                alt="Image 1"
              />
            </div>
            <div className="ImageText">
              <h2>POTRERO HILL HOUSE & STUDIO</h2>
            </div>
          </Link>
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
