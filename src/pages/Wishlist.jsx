import React from "react";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleXmark,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import Swal from "sweetalert2";

function Wishlist() {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    const existingProduct = userCart?.find(
      (item) => item.id == product.id
    );

    dispatch(addToCart(product));

    Swal.fire({
      title: "Success!!!",
      text: existingProduct
        ? `Product ${existingProduct.title} quantity incremented`
        : "Product added to cart",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <Header />

      <div className="container my-5">
        {userWishlist?.length > 0 ? (
          <div className="row pt-5">
            <h1 className="pt-5 text-primary">User Wishlist</h1>

            {userWishlist.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <Card className="rounded shadow h-100">
                  <Card.Img
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src={product.thumbnail}
                    alt={product.title}
                  />

                  <Card.Body className="text-center">
                    <Card.Title>{product.title}</Card.Title>

                    <div className="d-flex justify-content-evenly mt-3">
                      <button
                        onClick={() =>
                          dispatch(removeFromWishlist(product.id))
                        }
                        className="btn text-danger fs-4"
                      >
                        <FontAwesomeIcon icon={faHeartCircleXmark} />
                      </button>

                      <button
                        onClick={() => handleCart(product)}
                        className="btn text-success fs-4"
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{ height: "100vh" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              className="w-25"
              src="https://bexcart.com/assets/images/empty-cart.gif"
              alt="Empty wishlist"
            />

            <h1>Your wishlist is empty!!!</h1>

            <Link to="/" className="btn btn-primary">
              Add more...
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
