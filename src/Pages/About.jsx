import { ClickIcon } from '../assets/icons';
import src from '../assets/images/about-img-2.png';
import src1 from '../assets/images/about-img.png';

import ButtonLink from '../ui/ButtonLink';

function About() {
    return (
        <section className='bg-ground-color'>
            <h2 className="text-4xl font-medium text-center my-8  relative bg-white pb-16">ABOUT US</h2>
            <div className="grid sm:grid-cols-2 custom-min:grid-cols-1 custom-min:gap-8 place-items-center custom-min:pt-8 sm:pt-16 lg:px-24 sm:gap-4 md:gap-16 lg:gap-48 h-full">
                <img src={src1} alt="About Image" className='absolute left-[35rem] top-[20rem] w-[8%] opacity-90' />
                <div className="flex gap-4 flex-col px-16 ">
                    <h3 className="text-2xl font-medium text-base-color custom-min:text-center sm:text-start">About Us</h3>
                    <h1 className="sm:text-3xl md:text-5xl leading-tight z-10 font-semibold">Providing Consulting <br /> Services & Business <br />  Management</h1>
                    <p className='text-lg text-text-color'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit veritatis incidunt nihil quasi doloremque, laborum velit deleniti
                        nisi aliquid cum qui rem natus amet soluta quibusdam quod nihil molestias libero autem.
                        Consequuntur rerum nisi perspiciatis voluptate nobis iusto laborum ex?</p>
                </div>
                <div className="flex flex-col gap-8 px-16">
                    <div>
                        <div className='flex gap-4 items-center mb-4'>
                            <span className="bg-base-color py-2.5 px-3 rounded-full inline-block">{ClickIcon && <ClickIcon width="20px" height="16px" />}</span>
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                        </div>
                        <p className="sm:w-3/4">Lorem ipsum Molestiae, accusantium fugiat debitis laborum quibusdam quos quis qui atque nameiciendis, minima.</p>
                    </div>
                    <div>
                        <div className='flex gap-4 items-center mb-4'>
                            <span className="bg-base-color py-2.5 px-3 rounded-full inline-block">{ClickIcon && <ClickIcon width="20px" height="16px" />}</span>
                            <h3 className="text-xl font-semibold">Our Vision</h3>
                        </div>
                        <p className="sm:w-3/4">Lorem ipsum Molestiae, accusantium fugiat debitis laborum quibusdam quos quis qui atque nameiciendis, minima.</p>
                    </div>
                </div>
            </div>
            <div className='mb-8 relative'>
                <div className="triangle-right-angle"></div>
                <h3 className='custom-min:2xl custom-md:text-3xl sm:text-5xl font-semibold leading-tight absolute top-[20%] custom-min:left-[30%] md:left-[30%] mb-8'>Believe us when its come to <br/> Consultant & Management</h3>
                <div>
                    <img src={src} alt="Image" className='custom-min:w-[15%] custom-md:w-[10%] sm:w-[8%] absolute bottom-0 left-[60%] custom-min:left-[40%]' />
                    <ButtonLink link="/contact" text="Get in Touch" className="absolute custom-min:bottom-4 sm:bottom-8 lg:bottom-12 custom-min:left-[60%] sm:left-[52%] custom-min:px-2 custom-min:py-1 sm:py-2 sm:px-3" classLink="hover:text-footer-color text-white" />
                </div>
            </div>
        </section>
    )
}

export default About


