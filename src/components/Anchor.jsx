import React from 'react'
import { NavLink } from 'react-router-dom'

export const Anchor = ({ href, content}) => {
  return (
   <>
    <NavLink className="bg-gray-50 hover:bg-indigo-700 hover:text-white text-gray-950 px-4 py-1 rounded-lg" to={href} >{content}</NavLink>
   </>
  ) 
} 
