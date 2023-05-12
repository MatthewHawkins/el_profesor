/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react"
import title from "../static/logowords.png"

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {

  const mainStyles = css`
    background-color: #DD1E25;
    height: 33vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    align-items: flex-start;
    padding-top: 50px;
  `

  const titleStyles = css`
    object-fit: contain;
    width: 200px;
    transform: rotate(-25deg);
    padding-top: 70px;
  `

  const contactStyles = css`
    display: flex;
    flex-direction: column;
  `

  const contactItemStyles = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    color: white;
  `

  const hoursStyles = css`
    color: white;
  `

  return (
    <div>
      <div css={mainStyles}>
        <img src={title} css={titleStyles}></img>
        <div css={contactStyles}>
          <div css={contactItemStyles}>
            <PhoneIcon/>
            <p>0162 9184314</p>
          </div>
          <div css={contactItemStyles}>
            <EmailIcon/>
            <p>elprofesor3rm@gmail.com</p>
          </div>
          <div css={contactItemStyles}>
            <LocationOnIcon/>
            <p>St. Johanner Str. 38, 66111 
              Saarbrücken</p>
          </div>
        </div>
        <div css={hoursStyles}>
          Hours
          <ul>
            <li>Monday 12-10pm</li>
            <li>Monday 12-10pm</li>
            <li>Monday 12-10pm</li>
            <li>Monday 12-10pm</li>
            <li>Monday 12-10pm</li>
            <li>Monday 12-10pm</li>
            <li>Monday 12-10pm</li>
          </ul>
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}
