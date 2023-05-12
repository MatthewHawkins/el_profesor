/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from 'react'
import TitleBar from "../components/TitleBar"
import banner from "../static/rockyfood.jpg"
import Footer from "../components/Footer"

export default function Homepage() {

  const bannerStyles = css`
    width: 100%;
  `

  return (
    <div>
      <TitleBar />
      <img src={banner} css={bannerStyles}></img>
      <Footer />
    </div>
  )
}
