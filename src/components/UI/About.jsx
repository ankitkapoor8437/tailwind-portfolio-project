import React from 'react'


const aboutDetails = [
    {
        heading: "About me",
        subHeading: `I'm a web developer based in Punjab, originally from Himachal Pradesh. When I'm not coding, you can find me playing the guitar, listening to music, traveling, watching anime, and reading about history. I also love exploring new cafes and trying different cuisines, and weekend getaways are always on my list. My hobbies keep me inspired and help me bring a fresh perspective to my work.
        `,
    }
]

const About = () => {
    return (
        <section id='about'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                        {aboutDetails[0].heading}
                    </h2>
                    <p className='lg:max-w-[800px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                        {/* lg:mx-auto */}
                        {aboutDetails[0].subHeading}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About