// import landingPage from './landingPage'
import './landingPage.css'
import React, { useEffect } from 'react'
// import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-KT2GFP9'
}

TagManager.initialize(tagManagerArgs)

// ReactGA.initialize('G-2J5ECH8SJ0')

function App() {

  useEffect(()=> {
    ReactGA.pageview(window.location.pathname + window.location.search)
  })

  return (
    <div className='container'>
      <div className='logo'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/website_icon_logos/Padhakku+Blue.png' alt='...' /></div>
      <div className='poster'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/website+banners/Resume.gif' alt='...' /></div>
      <div className='content'><p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p></div>
      <a className='rent_button' href='https://www.google.com/'>CLICK HERE</a>
    </div>
  );
}

export default App