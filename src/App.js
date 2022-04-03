// import landingPage from './landingPage'
import './landingPage.css'
import React, { useEffect } from 'react'
// import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import TagManager from 'react-gtm-module'
import Logo from './logo/Padhakku White.png'
import Footer from './components/Footer'

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
      <div className='logo'><img src={Logo} alt='...' /></div>
      <div className='poster'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/Marketing+landing+Pages/Rent+Page.png' alt='...' /></div>
      <div className='content'><p>Now you can get college curriculum books at rent for as low as 50 Rs.</p></div>
      <div className='flex'>
        <a className='rent_button' href='https://bit.ly/padhakku-rent-ml'>RENT NOW</a>
        <a className='whatsapp_button' href='https://wa.me/918376070107/'>WHATSAPP</a>
      </div>
      <Footer />
    </div>
  );
}

export default App