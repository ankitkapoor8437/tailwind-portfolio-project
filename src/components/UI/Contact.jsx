import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='pb-16'>
            <div className='container'>
                <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8 ">
                    Get in touch
                </h2>
                <div className='md:flex justify-between items-center gap-4 bg-transparent' >
                    <div className="  w-full md:w-1/2 h-[300px] sm:h-[450px]  rounded-lg shadow-lg shadow-[#8873ef]">
                        <iframe className="rounded-lg border-0 w-full h-full" title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112124.08534967729!2d76.96269235121048!3d28.573435974495677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a9c31eec4e1%3A0x39493976cba4c89a!2sDwarka%2C%20Delhi!5e0!3m2!1sen!2sin!4v1690741753548!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className="rounded-lg w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-primaryColor px-4
                    lg:px-8 py-8  rounded-lg shadow-lg shadow-[#8873ef]">
                        <form className='w-full'>
                            <div className='mb-5'>
                                <input type="text"
                                    placeholder='Enter your name'
                                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <div className='mb-5'>
                                <input type="text"
                                    placeholder='Enter your email'
                                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <div className='mb-5'>
                                <input type="text"
                                    placeholder='Enter your subject'
                                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <div className='mb-5'>
                                <textarea type="text"
                                    rows={3}
                                    placeholder='Enter your message'
                                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor
                            text-center ease-linear duration-150">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;