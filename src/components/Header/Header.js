import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <header className='header'>
            <h3 className='contact'>Contact Me</h3>
            <div className='formInfo'>
              <h2 className='formHeader'>Let me know if you want to talk 
                about a potential collaboration.
                I'm available for freelance work.
              </h2>
              <a href='' className='myemail'>informme@mail.com</a>
            </div>
        </header>
    </div>
  )
}

export default Header