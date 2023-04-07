import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div className="container-fluid">
      <NavLink className="navbar-brand fw-bold fs-4" to="/">Thien Store.</NavLink>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </div>
      </div>
      <div className='buttons'><NavLink to='/cart' className='btn btn-outline-dark ms-2'><i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})</NavLink></div>
    </div>
  </nav></div>
  )
}

export default Navbar