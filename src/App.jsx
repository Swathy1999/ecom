import "./App.css"
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-regular-svg-icons"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Pnf from "./pages/Pnf"

import View from "./pages/View"


function App() {
  const [page, setPage] = useState("products")
  return (
    <>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<View />} />
        <Route path='/*' element={<Pnf />} />
      </Routes >
      <Footer />
      {/* <div className="bg-light min-vh-100">
        <Navbar page={page} setPage={setPage} />
        {page === "products" && <ProductList />}
        {page === "cart" && <Cart setPage={setPage} />}{" "}
        {page === "wishlist" && <Wishlist setPage={setPage} />}
      </div> */}
    </>
  )
}

export default App
