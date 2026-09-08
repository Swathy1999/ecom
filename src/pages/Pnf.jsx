import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
     <div
      style={{ height: '90vh' }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <img
        className="w-25"
        src="https://www.innonet.nl/wp-content/uploads/2017/11/Page-not-found.png"
        alt="page not found"
      />

      <h6 className="mt-5">WE ARE SORRY, LOOK LIKE YOU'RE LOST</h6>

      <p>Page you're looking for is not available!!!</p>

      <Link to="/" className="btn btn-dark">
        Back to Home
      </Link>
    </div>
  )
}

export default Pnf