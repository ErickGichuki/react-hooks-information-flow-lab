import React, {useState} from 'react'

function Header({onDarkModeClick}) {
  
  return (
    <div>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
           Mode
        </button>
      </header>
    </div>
  )
}
export default Header;