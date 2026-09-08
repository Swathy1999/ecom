import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTruck,faArrowRight,faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons"
import {faFacebookF,faTwitter,faWhatsapp,faInstagram} from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className="bg-primary text-white py-5 mt-5">

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>
              <FontAwesomeIcon icon={faTruck} className="me-2" />
              E Cart
            </h3>

            <p>
              Designed and built with all the love in the world by the
              Luminar team with the help of our contributors.
            </p>

            <p>
              Code licensed Luminar, docs CC BY 3.0.
            </p>

            <p>
              Currently v5.3.2.
            </p>

          </div>


          {/* Links */}
          <div className="col-md-2">

            <h4>Links</h4>

            <p>Home</p>
            <p>Wishlist</p>
            <p>Cart</p>

          </div>


          {/* Guides */}
          <div className="col-md-2">

            <h4>Guides</h4>

            <p>Bootstrap</p>
            <p>Redux</p>
            <p>React</p>

          </div>


          {/* Contact */}
          <div className="col-md-4">

            <h4>Contact Us</h4>

            <div className="input-group">

              <input
                type="email"
                className="form-control"
                placeholder="Email Here!!"
              />

              <button className="btn btn-light">

                <FontAwesomeIcon icon={faArrowRight} />

              </button>

            </div>


            {/* Social Icons */}
            <div className="mt-4">

              <FontAwesomeIcon
                icon={faFacebookF}
                className="me-4"
              />

              <FontAwesomeIcon
                icon={faTwitter}
                className="me-4"
              />

              <FontAwesomeIcon
                icon={faWhatsapp}
                className="me-4"
              />

              <FontAwesomeIcon
                icon={faInstagram}
                className="me-4"
              />

              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-4"
              />

              <FontAwesomeIcon
                icon={faPhone}
              />

            </div>

          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
