import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/'>
        <span className='navbar-brand mb-0 h1'>Biosec EMS</span>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'></ul>
        <form className='form-inline my-2 my-lg-0'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/archives'>
                Archives <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/logs'>
                Check Logs
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  )
}

export default Nav
