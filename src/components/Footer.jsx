import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className='text-center font-medium text-grey-dark pb-8'>
      {year} &copy; Hibatillah
    </footer>
  )
}

export default Footer