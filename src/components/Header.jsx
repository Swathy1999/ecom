import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faHeart,
  faCartPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { searchProduct } from "../redux/slices/productSlice";

function Header({ insideHeader }) {
  const dispatch = useDispatch();
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        {/* Logo */}
        <Navbar.Brand>
          <Link to="/" className="text-light text-decoration-none fw-bold">
            <FontAwesomeIcon icon={faTruckFast} className="me-2" />E CART
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {/* Search */}
            {insideHeader && (
              <Nav.Item>
                <input
                  onChange={(e) => dispatch(searchProduct(e.target.value))}
                  type="text"
                  className="form-control"
                  placeholder="Search Products Here.."
                />
              </Nav.Item>
            )}

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="text-light text-decoration-none fw-bold"
            >
              <FontAwesomeIcon icon={faHeart} className="text-danger me-1" />
              Wishlist
              <Badge pill bg="secondary">
                10
              </Badge>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="text-light text-decoration-none fw-bold"
            >
              <FontAwesomeIcon
                icon={faCartPlus}
                className="text-success me-1"
              />
              Cart
              <Badge pill bg="secondary">
                10
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
