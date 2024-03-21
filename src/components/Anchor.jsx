import React from 'react'
import { NavLink } from 'react-router-dom'

export const Anchor = ({ href, content, isClose}) => {
  const handleLinkClick = () => {
    isClose();
  }

  return (
   <>
    <NavLink className="text-white py-2 hover:border-b-[3px] hover:border-b-white sm:pb-[0.1rem]" to={href} onClick={handleLinkClick}>{content}</NavLink>
   </>
  ) 
} 
