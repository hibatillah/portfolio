import React from 'react'

const Banner = ({ title, time }) => {
  return (
    <div className="w-fit px-4 py-2 rounded-lg border border-grey-dark">
      <h4 className="">{title}</h4>
      <p>{time}</p>
    </div>
  )
}

export default Banner