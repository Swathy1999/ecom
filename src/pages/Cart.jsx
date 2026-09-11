import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  emptyCart,
  incrementCart,
  removeCart,
} from "../redux/slices/cartSlice";
import Swal from "sweetalert2";

function Cart() {
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setCartTotal(userCart?.reduce((acc, cur) => acc + cur.totalPrice, 0));
  }, [userCart]);
  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementCart(product.id));
    } else {
      dispatch(removeCart(product.id));
    }
  };

  const handleCheckout = () => {
    dispatch(emptyCart());
    Swal.fire({
      title: "Success, Order has been Placed!!!",
      text: "Thankyou for the Purchase",
      icon: "success",
      confirmButtonText: "Shop More!!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  return (
    <>
      <Header />
      {userCart?.length > 0 ? (
        <div className="container pt-5">
          <h1 className="text-primary my-5">Cart Summary</h1>
          <div className="row g-4">
            <div className="col-md-8 border rounded p-4">
              <h4 className="mb-4">Your Cart</h4>

              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userCart?.map((item, index) => (
                      <tr key={item?.id}>
                        <td>{index + 1}</td>
                        <td>{item?.title}</td>
                        <td>
                          <img
                            src={item?.thumbnail}
                            width="50"
                            height="50"
                            className="rounded"
                            alt="Product"
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              onClick={() => handleDecrementQuantity(item)}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item?.quantity}
                              readOnly
                              className="form-control form-control-sm text-center mx-2"
                              style={{ width: "50px" }}
                            />
                            <button
                              onClick={() => dispatch(incrementCart(item?.id))}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${item?.totalPrice}</td>
                        <td>
                          <button
                            onClick={() => dispatch(removeCart(item?.id))}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-end">
                <button
                  className="btn btn-danger me-2"
                  onClick={() => dispatch(emptyCart())}
                >
                  Empty Cart
                </button>
                <Link to="/" className="btn btn-info text-white">
                  Shop More
                </Link>
              </div>
            </div>

            <div className="col-md-4 border rounded p-4">
              <h4 className="mb-4">Order Summary</h4>
              <div className="d-flex justify-content-between mb-3">
                <span>Total Items :</span>
                <span>{userCart.length}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total Amount : </strong>
                <strong className="text-primary">${cartTotal}</strong>
              </div>
              <button onClick={handleCheckout} className="btn btn-success w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: "80vh" }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <img
            className="w-25"
            src="https://bexcart.com/assets/images/empty-cart.gif"
            alt="Empty wishlist"
          />

          <h1>Your Cart is Empty!!!</h1>

          <Link to="/" className="btn btn-primary">
            Add more...
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
