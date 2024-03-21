import React from 'react'
import { Anchor } from './Anchor'
import { LINKS_HEADER } from '../utils/links'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/auth.actions'

export const Header = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(true);
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  const { current, logout } = authActions;

  const handleInput = (e) => {
    dispatch(logout());
    setMenuOpen(true);
  }
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    }
  }

  return (
    <div className='flex justify-around items-center w-screen h-20 bg-indigo-500 sm:h-auto'>
      <div className=' w-[7rem] h-[6.7rem] sm:w-[4rem] sm:h-auto'>
        <img src="../public/logo.png" alt="Logo" />
      </div>
      <div className={`flex gap-[3rem] md:gap-5 xl:gap-[3rem] sm:flex-col sm:gap-1 sm:items-center sm:fixed sm:top-0 sm:left-0 sm:h-auto sm:w-full sm:bg-indigo-500 sm:py-3 sm:transition-transform sm:duration-300 sm:transform ${!menuOpen ? 'sm:translate-x-0' : 'sm:-translate-x-full'}`}>
        <div className='md:hidden w-[7rem] h-[6.7rem] sm:w-[4rem] sm:h-auto'>
          <img src="../public/logo.png" alt="Logo" />
        </div>
        {LINKS_HEADER.map((link, index) => (
          <Anchor
            key={index}
            href={link.href}
            content={link.name}
            isClose={handleLinkClick}
          />
        ))}
        <button type='button' className='cursor-pointer py-2' onClick={handleInput}><img src="../public/cerrar-sesion.png" alt="cerrar-sesion" /></button>
          <span className="md:hidden" onClick={toggleMenu}>
            <img src="../public/menuHamburguesa.png" alt="" />
          </span>    
      </div>
      <span className="md:hidden" onClick={toggleMenu}>
        <img src="../public/menuHamburguesa.png" alt="" />
      </span>
    </div>
  )
}

export default Header