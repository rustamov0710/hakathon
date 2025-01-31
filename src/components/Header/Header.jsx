import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.svg'
import Phone from '../../assets/phone.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return <>
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link className='header-logo-link'>
            <img src={Logo} className='header-logo' />
          </Link>
          <ul className="header-list">
            <li className="header-item">
              <Link className="header-item-link">Главная</Link>
            </li>
            <li className="header-item">
              <Link className="header-item-link">Номера</Link>
            </li>
            <li className="header-item">
              <Link className="header-item-link">Услуги</Link>
            </li>
            <li className="header-item">
              <Link className="header-item-link">О нас</Link>
            </li>
            <li className="header-item">
              <Link className="header-item-link">Контакты</Link>
            </li>
          </ul>
          <div className="header-phone">
            <img src={Phone} className='header-phone-image' />
            <p className='header-phone-text'>+7 995 383 16 16</p>
          </div>
          <button className="header-btn">
            Забронировать
          </button>
        </div>
      </div>
    </header>
  </>
}

export default Header