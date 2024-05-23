import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../css/Footer.css"



const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div class="container" style={{ backgroundColor: "blueviolet" }}>
          <br />
          <div class="row">

            <div className="col-6 d-flex justify-content-center align-items-center">
              <h3 style={{ fontSize: "30px" }}>Derechos reservados alumno FRT 2024</h3>
            </div>

            <div class="col-6 d-flex justify-content-center align-items-center" style={{ textAlign: "right" }}>
              <a href="https://www.facebook.com/jesus.delirious">
                <CiFacebook style={{ width: "100px", height: "100px", color: "aqua" }} />
              </a>
              <a href="https://www.instagram.com/jesus_nc93/">
                <FaInstagram style={{ width: "100px", height: "100px", color: "violet" }} />
              </a>
              <a href="https://x.com/JesusNC93">
                <FaTwitter style={{ width: "100px", height: "100px", color: "blue" }} />
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Footer