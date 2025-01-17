import React from 'react'
import './popular.css'
import Item from '../item/item'
import data_product from '../Assets/data.js'

const popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
      {data_product.map((item, i) => (
          <Item
            key={i}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}

      </div>
    </div>
  )
}

export default popular
