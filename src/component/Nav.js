import React from 'react'
import { NavLink } from 'react-router-dom'





const Nav = () => {

  return (
    <div className='navbar'>
      <div className='nav1'>      
        <NavLink className='nav1navlinktmdb' to='/'>Movie Database</NavLink>
        <NavLink className='nav1navlinklatestmovie' to="/Latestpage">Latest Movies</NavLink>
        <NavLink className='nav1navlinkpopularmovie' to='/popularpage'>Popular Movies</NavLink>
      </div>

      <div className='nav2'>
        <NavLink className='nav2eyeicon'>👀</NavLink>
        <NavLink className='nav2jointmdbstyle'>Join Database</NavLink>
      </div>

    </div>
  )
}

export default Nav