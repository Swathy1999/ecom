import React from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"

function Cart() {
  return (
    <>
      <Header />
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
                  <tr>
                    <td>1</td>
                    <td>Eyeshadow Palette</td>
                    <td><img src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp" width="50" height="50" className="rounded" alt="Product" /></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-secondary">-</button>
                        <input type="text" value={18} readOnly className="form-control form-control-sm text-center mx-2" style={{ width: "50px" }} />
                        <button className="btn btn-sm btn-outline-secondary">+</button>
                      </div>
                    </td>
                    <td>$30</td>
                    <td><button className="btn btn-sm btn-outline-danger">Remove</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-end">
              <button className="btn btn-danger me-2">Empty Cart</button>
              <Link to="/" className="btn btn-info text-white">Shop More</Link>
            </div>
          </div>

          <div className="col-md-4 border rounded p-4">
            <h4 className="mb-4">Order Summary</h4>
            <div className="d-flex justify-content-between mb-3"><span>Subtotal</span><span>$30</span></div>
            <div className="d-flex justify-content-between mb-3"><span>Shipping</span><span className="text-success">Free</span></div>
            <hr />
            <div className="d-flex justify-content-between mb-4"><strong>Total</strong><strong className="text-primary">$30</strong></div>
            <button className="btn btn-success w-100">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart