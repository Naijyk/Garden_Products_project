import React from 'react'
import banner from './banner.png'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function Main() {

  const banner_styles = {
    backgroundImage: `url('${banner}')`
  }
  return (
    <div className={[s.banner, 'wrapper'].join(' ')} style={banner_styles}>
      <div>
          <p>Amazing Discounts</p>
          <p>on Garden Products!</p>
      </div>
        <Link to='./sales'> Check out </Link>

  </div>
  )
}
