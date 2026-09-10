import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function View() {

const {id} = useParams()
const {allProducts} = useSelector(state=>state.productReducer) 
const [product, setProduct] = useState({})
console.log(product);
useEffect(()=>{
setProduct(allProducts?.find(item=>item?.id==id))
},[])
  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row pt-5 align-items-center" style={{ height: "100vh" }}>
          {/* Product Image */}
          <div className="col-lg-6 text-center">
            <img
              className="img-fluid"
               src={product?.thumbnail}
              alt="Product Image"
            />

            <div className="d-flex justify-content-evenly mt-5">
              <button className="btn btn-info rounded">ADD TO WISHLIST</button>

              <button className="btn btn-success rounded">ADD TO CART</button>
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
            {/* <div className="border rounded p-2 shadow my-1">
              <p>
                <span className="fw-bolder">Name: </span>message
              </p>
              <p>
                Rating: 4
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </p>
            </div> */}
  {product?.reviews?.map((item) => (
  <div className="border rounded p-2 shadow-sm" key={item?.reviewerName}>
    <p>
      <span className="fw-bolder">{item?.reviewerName}</span>{" "}
      {item?.comment}
    </p>

    <p>
      Rating: {item?.rating}{" "}
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
