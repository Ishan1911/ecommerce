import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-decription">
        <p>
        An e-commerce website is an online platform that enables businesses or individuals to sell products or services directly to customers over the internet. These websites typically feature user-friendly interfaces for browsing, selecting, and purchasing items.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
