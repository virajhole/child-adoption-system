import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


const PDashNavbar = () => {

  const onLogout=()=>{
    sessionStorage.removeItem('user')
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark navbar">
      <a className="navbar" href="/">
      <img src="./images/imagesnew/NewLogoModifiedV2.jpeg" alt="" height="60" />
        </a>
      <div className="container">
      <a className="navbar-brand" href="/">
        Snehalaya Child Adoption Center
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{ marginLeft: 620 }}>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/pmyprofile">
                <Button outline color="success">
                  My Profile
                </Button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                <Button outline color="success" onClick={onLogout}>
                  Logout
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default PDashNavbar
