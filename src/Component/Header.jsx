import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>Think JS</h1>
      <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/product"} >Product</Link>
      </main>
    </nav>
  )
}

export default Header;