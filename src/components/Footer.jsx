import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <p>Visit my blog</p>
        <div className="socials">
            <a href="https://web.facebook.com/profile.php?id=100093316185594" className='icon'>
                <img src='/images/fb.png' />
            </a>
            <a href="https://www.instagram.com/blessedrogic/" className='icon'>
                <img src='/images/insta.png' />
            </a>
            <a href="https://x.com/MTADev_" className='icon'>
                <img src='/images/x.png' />
            </a>
        </div>
        <p>© 2025 Atabi Stanley. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
