import React from "react";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleXmark,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

function Wishlist() {
  return (
    <>
      <Header />

      <div className="container my-5">
        <h1 className="pt-5 text-primary">User Wishlist</h1>

        <div className="row pt-5">

          {/* Card */}
          <div className="col-md-3 mb-4">
            <Card className="rounded shadow h-100">

              <Card.Img
                style={{ height: "250px", objectFit: "cover" }}
                variant="top"
                src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
                alt="Eyeshadow Palette"
              />

              <Card.Body className="text-center">

                <Card.Title>
                  Eyeshadow Palette with Mirror
                </Card.Title>

                <div className="d-flex justify-content-evenly mt-3">

                  <button className="btn text-danger fs-4">
                    <FontAwesomeIcon icon={faHeartCircleXmark} />
                  </button>

                  <button className="btn text-success fs-4">
                    <FontAwesomeIcon icon={faCartPlus} />
                  </button>

                </div>

              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}

export default Wishlist;