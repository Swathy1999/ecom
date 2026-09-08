import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Header />
      <div className="m-5">
        <div className="row pt-5">
          {/* Duplicate column accordingliy */}
          <div className="col-md-3 mb-2">
            {/* card */}
            <Card className="rounded shadow">
              <Card.Img
                style={{ height: "250px" }}
                variant="top"
                src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
              />
              <Card.Body className="text-center">
                <Card.Title>Card Title</Card.Title>
                <Link to={"/product/id"} className="btn btn-primary">
                  View More.....
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
