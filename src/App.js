// import landingPage from './landingPage'
import './landingPage.css'
import React from 'react'

// function App() {
//   return (
//     <div>
//       <landingPage />
//     </div>
//   );
// }

function App() {
  return (
    <div className='container'>
      <div className='logo'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/website_icon_logos/Padhakku+Blue.png' alt='...' /></div>
      <div className='poster'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/website+banners/Resume.gif' alt='...' /></div>
      <div className='content'><p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p></div>
      <a className='button' href='https://www.google.com/'>CLICK HERE</a>
    </div>
  );
}

export default App;