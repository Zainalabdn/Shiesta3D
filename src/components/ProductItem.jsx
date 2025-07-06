import React from 'react'

function ProductItem({ image, name, description, price }) {
  return (
    <div className='productItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <div className='textContent'>
        <h1> {name} </h1>
        <p> {description} </p>
        <h3> {price} </h3>
      </div>
    </div>
  )
}

export default ProductItem
