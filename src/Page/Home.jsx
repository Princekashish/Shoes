import React from 'react'
import Herosection from '../components/Herosection'
import NewDrop from '../components/NewDrop'
import Category from '../components/Category'
import Review from '../components/Review'

export default function Home() {
  return (
    <div className=''>
      <Herosection/>
      <NewDrop/>
      <Category/>
      <Review/>
    </div>
  )
}
