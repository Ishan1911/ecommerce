import React from 'react'
import './newcollections.css'
import new_collections from '../Assets/new_collections'
import Item from  '../item/item'

const newcollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collections.map((item,i)=>{
            return (<Item
            key={i}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />)
        })}

      </div>
    </div>
  )
}

export default newcollections
