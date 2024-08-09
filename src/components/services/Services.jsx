import { ServiceImageIcon } from '../../assets/icons';
import { service1, service2, service3, service4 } from "../../assets/images/services"

function Services() {
    return (
        <div className="py-12 sm:px-32 custom-min:px-20">
            <h1 className="text-2xl font-semibold text-base-color text-center">OUR SERVICES</h1>
            <div className='grid lg:grid-cols-4 place-items-center md:grid-cols-3 custom-md:grid-cols-2 custom-min:grid-cols-1 custom-min:gap-8 sm:gap-16 py-12'>
                <div className='relative w-full'>
                    <div className="w-full h-80 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon width="97%" height='65%' />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-8'>Project <br/> Management</h3>
                    <img src={service1} alt="service" className='w-28 absolute bottom-2 left-[33.33%]' />
                </div>
                <div className='relative w-full'>
                    <div className="w-full h-80 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon width="97%" height='65%' />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-8'>Legal <br /> Consultant</h3>
                    <img src={service4} alt="service" className='w-28 absolute bottom-2 left-[33.33%]' />
                </div>
                <div className='relative w-full'>
                    <div className="w-full h-80 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon width="97%" height='65%' />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-8'>Business <br /> Growth</h3>
                    <img src={service3} alt="service" className='w-28 absolute bottom-2 left-[33.33%]' />
                </div>
                <div className='relative w-full'>
                    <div className="w-full h-80 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon width="97%" height='65%' />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-8'>New <br /> Business Idea</h3>
                    <img src={service2} alt="service" className='w-28 absolute bottom-2 left-[33.33%]' />
                </div>
            </div>
        </div>
    )
}

export default Services
