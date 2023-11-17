import React from 'react'
import {Image} from 'react-native'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <h2 className='footerHeader'>Let's be Friends</h2>
      <div>
        <Image src={require('../../assets/Polygon.png')} className='socialNetworks' alt="Logo"></Image>
        <Image src={require('../../assets/Polygon.png')} className='socialNetworks' alt="Logo"></Image>
        <Image src={require('../../assets/Polygon.png')} className='socialNetworks' alt="Logo"></Image>
      </div>
    </div>
  )
}

export default Footer