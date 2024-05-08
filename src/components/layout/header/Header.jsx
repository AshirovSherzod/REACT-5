import React from 'react'
import './header.scss'

const Header = (props) => {
  console.log(props.data);

  
  return (
    <header className='header'>
        <div className="container row">
            <div className="header__left">
            <h1>Logo</h1>
            </div>
            <div className="header__middle">
            <ul className='row'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Subscribe</a></li>
            </ul>
            </div>
            <div className="header__btns">
            <button>Show Card</button>
            </div>
        </div>
    </header>
  )
}

export default Header