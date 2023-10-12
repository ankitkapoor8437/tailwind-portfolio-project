import React from 'react'
import links from '../../assets/data/followLinks'
import menuItems from '../../assets/data/menuItems'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/* Footer Top Start */}
      <div className="container">
        <div className="sm:flex items-center justify-center md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautifull products?
            </h2>
            <a href="#contact">
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 
                                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i className='ri-mail-line'></i>Hire Me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Elevating online experiences, one line of code at a time: Transforming visions into interactive realities, ensuring websites leave a lasting impression.              </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              {
                links.map(({ link, style }) => (
                  <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                    <a href={link} className="text-gray-300 font-[500] text-[18px]">
                      <i className={style}></i>
                    </a>
                  </span>
                ))
              }
            </div>
          </div>
        </div>
        <div>
          <ul className='flex items-center justify-center gap-10 mt-10'>
            {
              menuItems.map(({ url, display }) => (
                <li >
                  <a className='text-gray-400 font-[600]' href={url}>{display}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {/* Footer Top End */}

      {/* Footer Bottom Start */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px]
                flex items-center justify-center">
                  AK
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">Ankit Kapoor</h2>
                  <p className="text-gray-400 text-[14px] font-[500]">Personal Portfolio</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright &copy; {year} by Ankit Kapoor - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}
    </footer>
  )
}

export default Footer