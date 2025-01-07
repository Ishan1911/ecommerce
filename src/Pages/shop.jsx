import React from 'react'
import Hero from '../Components/hero/hero'
import Popular from '../Components/popular/popular'
import Offers from '../Components/offers/offers'
import NewCollections from '../Components/newcollections/newcollections'
import Newsletter from '../Components/newsletter/newsletter'

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default shop
