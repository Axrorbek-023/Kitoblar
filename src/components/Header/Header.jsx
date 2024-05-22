import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.png'

function Header() {
    const location = useLocation().pathname

    // let a = 0
    // console.time()
    // for (let i = 0; i < 10000; i++) {
    //   a = a + i
    // }
    // console.timeEnd()
  
  return (
    <header className='header'>
        <nav className='nav container'>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link className={location == '/' ? 'active' : null} to='/'>Bosh sahifa</Link>
                </li>
                <li className="nav__item">
                    <Link className={location == '/book' ? 'active' : null} to='/book'>Kitoblar</Link>
                </li>
                <li className="nav__item">
                    <Link className={location == '/profile' ? 'active' : null} to='/profile'>Profile</Link>
                </li>
            </ul>
            <img src={avatar} alt="" />
        </nav>
    </header>
  )
}

export default Header