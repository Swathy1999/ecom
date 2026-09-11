import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import Swal from "sweetalert2";
import { addToCart } from "../redux/slices/cartSlice";

function View() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { allProducts } = useSelector((state) => state.productReducer);
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const [product, setProduct] = useState({});
  console.log(product);
  useEffect(() => {
    setProduct(allProducts?.find((item) => item?.id == id));
  }, []);

  const handleWishlist = () => {
    console.log("Inside handle wishlist");
    const existingproduct = userWishlist?.find(
      (item) => item.id == product?.id,
    );
    if (existingproduct) {
      Swal.fire({
        title: "Sorry!!!",
        text: "Product Already in Wishlist!!!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      dispatch(addToWishlist(product));
      Swal.fire({
        title: "Success!!!",
        text: "Product Added to Wishlist!!!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleCart = () => {
    const existingProduct = userCart?.find((item) => item.id == product?.id);
    dispatch(addToCart(product));
    Swal.fire({
      title: "Success!!!",
      text: existingProduct
        ? `Product ${existingProduct.title} quantity Incremented`
        : `Product Added to Cart`,
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return (
    <>
      <Header />

      <div className="container my-5">
        <div
          className="row pt-5 align-items-center"
          style={{ height: "100vh" }}
        >
          {/* Product Image */}
          <div className="col-lg-6 text-center">
            <img
              className="img-fluid"
              src={product?.thumbnail}
              alt="Product Image"
            />

            <div className="d-flex justify-content-evenly mt-5">
              <button onClick={handleWishlist} className="btn btn-info rounded">
                ADD TO WISHLIST
              </button>

              <button onClick={handleCart} className="btn btn-success rounded">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Details */}

          <div className="col-lg-6">
            <h1>{product?.title}</h1>
            <h2 className="text-danger">{product?.price}</h2>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category: {product?.category}</h4>
            <h4>Description: {product?.description}</h4>
            <h5>Client Reviews:</h5>
            {product?.reviews?.map((item, index) => (
              <div key={index} className="border rounded p-2 shadow-sm">
                <p>
                  <span className="fw-bolder">{item?.reviewerName}</span>
                  {item?.comment}
                </p>

                <p>
                  Rating: {item?.rating}
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
