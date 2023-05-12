/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react"
import logo from "../static/prof_logo.jpg";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

export default function TitleBar() {
  
  const mainStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `
  const logoStyles = css`
    width: 150px;
    margin: 10px 0 0 10px;
  `

  const optionStyles = css`
    display: flex;
    flex-direction: row;
    gap: 30px;
    font-family: 'Anton', sans-serif;
  `

  const contactStyles = css`
    display: flex;
    flex-direction: row;
    gap: 30px;
    font-family: 'Anton', sans-serif;
    margin-right: 20px;
  `

  return (
    <div css={mainStyles}>
      <img src={logo} css={logoStyles}></img>
      <div css={optionStyles}>
        <div>Home</div>
        <div>About Us</div>
        <div>Menu</div>
        <div>Contact Us</div>
        <div>Order Online</div>
      </div>
      <div css={contactStyles}>
        <div>0162 9184314</div>
        <FacebookIcon />
        <InstagramIcon />
        <GoogleIcon />
      </div>
    </div>
  )
}
