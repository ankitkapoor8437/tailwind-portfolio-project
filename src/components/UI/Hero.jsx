import React from 'react'
import heroImage from '../../assets/images/main-image.png'
import CountUp from 'react-countup';
import links from '../../assets/data/followLinks';
import counters from '../../assets/data/counterDetails';


const Hero = () => {
    return (
        <section className='pt-0' id="about">
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between  sm:flex-col md:flex-row'>
                    {/* Left Section */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>
                            Welcome to my Space !
                        </h5>
                        <h1 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
                        sm:leading-[46px] mt-5' >
                            I'm Ankit Kapoor. <br />
                            Web Developer
                        </h1>

                        <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='flex items-center gap-6 mt-7' >
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 
                                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                    <i className='ri-mail-line'></i>Hire Me
                                </button>
                            </a>
                            <a href="#portfolio" className='text-smallTextColor  font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                                See Portfolio
                            </a>
                        </div>
                        <p className='flex gap-2 text-headingColor font-[500] mt-12 
                         text-[15px] leading-7  sm:pr-10 '
                            data-aos='fade-up' data-aos-duration='1800'  >
                            <span>
                                <i className='ri-apps-2-line'></i>
                            </span>
                            As a Front End Developer, my objective is to deliver innovative and intuitive web applications that not only meet but exceed user expectations. I am looking for a challenging role that allows me to apply my technical expertise, creativity, and passion for web development, while constantly learning and improving my skills.
                        </p>

                        {/* Follow me section */}
                        <div className='flex items-center gap-9 mt-14' data-aos='fade-up' data-aos-duration='1800' data-aos-delay='100' >
                            <span>
                                Follow me:
                            </span>
                            {
                                links.map(({ link, style }, index) => (
                                    <span key={index}>
                                        <a href={link} target="_blank" rel="noopener noreferrer" className='text-smallTextColor text-[20px] font-[600]'>
                                            <i className={style}></i>
                                        </a>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    {/* Left End */}


                    {/* Image Section */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center  rounded-lg shadow-lg shadow-[#8873ef]	'>
                            <img className=" rounded-lg" src={heroImage} alt="" />
                        </figure>
                    </div>
                    {/* Image Section End */}
                    {/* Content Section */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        {
                            counters.map(({ display, start, end, suffix }, index) => (
                                <div className='mb-10' key={index}>
                                    <h2 className='text-headingColor font-[700] text-[32px]'>
                                        <CountUp start={start} end={end} duration={3} suffix={suffix} />
                                    </h2>
                                    <h4 className='text-headingColor font-[600] text-[18px]'>
                                        {display}
                                    </h4>
                                </div>
                            ))
                        }
                    </div>
                    {/* Content End */}
                </div>
            </div>
        </section>
    )
}

export default Hero;