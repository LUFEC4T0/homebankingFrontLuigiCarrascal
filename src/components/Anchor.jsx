import React from 'react'
import { Link } from 'react-router-dom'

export const Anchor = ({ href, content}) => {
  return (
   <>
    <Link className="bg-gray-50 text-gray-950 px-4 py-1 rounded-lg" to={href} >{content}</Link>
   </>
  ) 
}
