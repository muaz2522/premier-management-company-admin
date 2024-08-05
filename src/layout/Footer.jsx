import { Link } from 'react-router-dom';
import src from '../assets/images/main-app-img-white.png';
import * as Icons from '../assets/icons';

function Footer() {
    return (
        <footer className='bg-base-color relative md:h-[240px] md:truncate'>
            <div>
                <div className="footer-section1 hidden custom-min:hidden md:block"></div>
                <div className="footer-section2 hidden custom-min:hidden md:block"></div>
                <div className="footer-section3 hidden custom-min:hidden md:block"></div>
            </div>
            <div className='py-4 px-16'>
                <div className='border-b border-gray-300 pb-4 text-base text-footer-color custom-min:grid-cols-1 custom-md:grid-cols-2 custom-min:place-items-center custom-md:place-items-start grid md:grid-cols-4 gap-4'>
                    <div className='flex flex-col custom-min:items-center custom-md:items-start custom-min:gap-2 lg:gap-8'>
                        <img src={src} alt="Premier" className='md:max-w-[80%] custom-min:w-[50%] custom-md:w-[60%]' />
                        <div className="flex flex-col gap-4">

                            <p className='grid grid-cols-[20px_1fr]'>
                                <span>{Icons.Arrow && <Icons.Telephone />}</span>
                                <span>+1 324536467685</span>
                            </p>
                            <p className='grid grid-cols-[20px_1fr] '>
                                <span>{Icons.Arrow && <Icons.EmailIFill className="mr-2" />}</span>
                                <span>Support@premier.com</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col text-wrap custom-min:items-center custom-md:items-start'>
                        <h2 className='text-3xl custom-min:md-4 md:mb-8 text-white'>About Us</h2>
                        <p className='md-w-full lg:w-[90%] custom-min:text-center custom-md:text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi, molestie eu dui ut, fringilla tristique quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                    <div className='flex flex-col custom-min:gap-2 sm:gap-4'>
                        <h2 className='text-3xl custom-min:mb-1 md:mb-4 text-white'>Other Pages</h2>

                        <span className='flex items-center'>{Icons.Arrow && <Icons.Arrow className="mr-2" />}
                            <Link className='hover:underline' to="/">Home</Link></span>

                        <span className='flex items-center'>{Icons.Arrow && <Icons.Arrow className="mr-2" />}
                            <Link className='hover:underline' to="services">Services</Link></span>

                        <span className='flex items-center'>{Icons.Arrow && <Icons.Arrow className="mr-2" />}
                            <Link className='hover:underline ' to="about">About Us</Link></span>

                        <span className='flex items-center'>{Icons.Arrow && <Icons.Arrow className="mr-2" />}
                            <Link className='hover:underline' to="contact">Get In Touch</Link></span>
                    </div>
                    <div className='flex flex-col custom-min:gap-2 sm:gap-4'>
                        <h2 className='text-3xl sm:mb-1 md:mb-4 text-white'>Other Pages</h2>
                        <span className='flex items-center'>{Icons.Arrow && <Icons.Arrow className="mr-2" />}
                            <Link className='hover:underline ' to="/">Privacy & Policy</Link></span>
                        <span className='flex items-center'>{Icons.Arrow && <Icons.Arrow className="mr-2" />}
                            <Link className='hover:underline' to="/">Terms of Services</Link></span>
                    </div>
                </div>
                <p className='text-center text-gray-300 pt-2'>Copyright © 2024 Premier Management Consultacy</p>
            </div>
        </footer>
    )
}

export default Footer
