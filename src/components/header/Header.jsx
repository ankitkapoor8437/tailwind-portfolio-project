import React from 'react'
import menuItems from '../../assets/data/menuItems'

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-[10px]'>
            <a href="/">
              <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                AK
              </span>
            </a>

            <div className="leading-[20px]">
              <h2 className='text-xl text-smallTextColor font-[700]'>Ankit Kapoor</h2>
              <p className='text-smallTextColor text-[10px] font-[500]'>Personal Portfolio</p>
            </div>
          </div>
          {/* Logo End */}

          {/* Menu Start */}
          <div className='menu'>
            <ul className='flex  items-center gap-10'>
              {
                menuItems.map(({ url, display }) => (
                  <li >
                    <a className='text-smallTextColor font-[600]' href={url}>{display}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header