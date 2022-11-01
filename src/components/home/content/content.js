import React from 'react'
import '../banner/banner.scss'
import './content.scss'
import Branding from './branding/branding'
import Custome from './custome/custome'
import Info from './info/info'
export default function Content() {
  return (
    <>
        <Branding />
        <Custome />
        <Info />
    </>
  )
}
