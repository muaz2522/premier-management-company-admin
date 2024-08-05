import { ServiceImageIcon } from '../../assets/icons';
import { service1, service2, service3, service4 } from "../../assets/images/services"

function Services() {
    return (
        <div className="py-16 sm:px-32 custom-min:px-24">
            <h1 className="text-4xl font-colona text-center">Our Services</h1>
            <div className='grid lg:grid-cols-4 place-items-center md:grid-cols-3 sm:grid-cols-2 custom-md:grid-cols-1 custom-min:gap-8 py-8'>
                <div className='relative'>
                    <div className="w-64 h-72 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-4'>Project Management</h3>
                    <img src={service1} alt="service" className='w-24 absolute bottom-1 left-[33.33%]' />
                </div>
                <div className='relative'>
                    <div className="w-64 h-72 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-4'>Legal <br /> Consultant</h3>
                    <img src={service4} alt="service" className='w-24 absolute bottom-1 left-[33.33%]' />
                </div>
                <div className='relative'>
                    <div className="w-64 h-72 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-4'>Business <br /> Growth</h3>
                    <img src={service3} alt="service" className='w-24 absolute bottom-1 left-[33.33%]' />
                </div>
                <div className='relative'>
                    <div className="w-64 h-72 rounded bg-core-color">
                        {ServiceImageIcon && <ServiceImageIcon />}
                    </div>
                    <h3 className='font-semibold text-2xl absolute top-16 left-4'>New <br /> Business Idea</h3>
                    <img src={service2} alt="service" className='w-24 absolute bottom-1 left-[33.33%]' />
                </div>
            </div>
        </div>
    )
}

export default Services
