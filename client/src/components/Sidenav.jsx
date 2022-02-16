import React from 'react'
import './styles/nav.css'
const Sidenav = () => {
  return (
 <div className='sidenav'>
    <div className='title'>
        <img src="./logo512.png" alt="" className='logo'/>
         <h2 className='text'>moments</h2>
    </div>
    <div className='item-container'>
        <h3 className='account'>accounts</h3>
      <ul className='loi'>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
      </ul>
    </div>
    <div className='item-container'>
        <h3 className='account'>Groups</h3>
      <ul className='loi'>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
          <li> <img src="./logo512.png" alt="" className='logo2'/>home</li>
      </ul>
    </div>
  </div>
  )
}

export default Sidenav