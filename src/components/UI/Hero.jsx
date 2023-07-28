import React from 'react'
// import heroImage from '../../assets/images/hero.svg'
// import CountUp from 'react-countup';


const Hero = () => {
    return (
        <section className='pt-0 id="about'>
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
                        <p className='flex gap-2 text-headingColor font-[500] mt-12 text-[15px] leading-7  sm:pr-10 '
                            data-aos='fade-up' data-aos-duration='1800'  >
                            <span>
                                <i className='ri-apps-2-line'></i>
                            </span>
                            As a Front End Developer, my objective is to deliver innovative and intuitive web applications that not only meet but exceed user expectations. I am looking for a challenging role that allows me to apply my technical expertise, creativity, and passion for web development, while constantly learning and improving my skills.
                        </p>
                    </div>
                    {/* Left End */}

                </div>
            </div>
        </section>
    )
}

export default Hero;