import { InnerAlignmentIcon } from '../../assets/icons';
import src from '../../assets/images/home/project-mng.png';
import src1 from '../../assets/images/home/legal-cons.png';
import src2 from '../../assets/images/home/business-grw.png';
import src3 from '../../assets/images/home/new-business.png';
import src4 from '../../assets/images/home/exp.png';



function Strategic() {
    return (
        <section>
            <div>
                <div className=" py-8 custom-md:px-24 custom-min:px-8">
                    <h3 className='font-semibold text-xl text-base-color'>OUR SERVICES</h3>
                    <h1 className='text-5xl font-medium py-4'>Strategic Business <br /> Management</h1>
                </div>
                <div className='custom-md:px-12 grid md:grid-cols-4 sm:grid-cols-3 custom-md:grid-cols-2 custom-min:grid-cols-1 custom-min:gap-y-2 custom-min:place-items-center custom-md:place-items-start md:gap-0'>
                    <div className='flex flex-col gap-4 border px-8 py-16 custom-min:items-center sm:items-start custom-min:w-3/4 custom-md:w-full'>
                        <img src={src} alt="project management" className='w-[40px]' />
                        <h3 className='font-medium text-xl'>Project <br /> Management</h3>
                    </div>
                    <div className='flex flex-col gap-4 border px-8 py-16 custom-min:items-center sm:items-start custom-min:w-3/4 custom-md:w-full'>
                        <img src={src1} alt="project management" className='w-[40px]' />
                        <h3 className='font-medium text-xl'>Legal <br /> Consultant</h3>
                    </div>
                    <div className='flex flex-col gap-4 border px-8 py-16 custom-min:items-center sm:items-start custom-min:w-3/4 custom-md:w-full'>
                        <img src={src2} alt="project management" className='w-[40px]' />
                        <h3 className='font-medium text-xl'>Business <br /> Growth</h3>
                    </div>
                    <div className='flex flex-col gap-4 border px-8 py-16 custom-min:items-center sm:items-start custom-min:w-3/4 custom-md:w-full'>
                        <img src={src3} alt="project management" className='w-[40px]' />
                        <h3 className='font-medium text-xl'>New Business <br /> Ideas</h3>
                    </div>
                </div>
            </div>
            <div className=' custom-min:px-8 custom-md:px-24 py-8'>
                <span className="block text-5xl mt-2 leading-tight text-center font-medium">Building Experience & Give <br /> High Success Rates</span>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-8 lg:gap-0 md:py-4 custom-min:pt-16'>
                    <div className='flex md:flex-col sm:flex-row custom-min:flex-col custom-min:gap-4 md:gap-0 items-center justify-center'>
                        <div className='bg-core-color custom-min:w-3/4 sm:w-full lg:w-11/12 py-4 text-center text-base-color mb-4'>
                            <h1 className='text-4xl font-bold mb-1'>900+</h1>
                            <h3 className='font-medium'>Gave Advices</h3>
                        </div>
                        <div className='bg-core-color custom-min:w-3/4 sm:w-full lg:w-11/12 p-4 text-center text-base-color mb-4'>
                            <h1 className='text-4xl font-bold mb-1'>80</h1>
                            <h3 className='font-medium'>Happy Clients</h3>
                        </div>
                        <div className='bg-core-color custom-min:w-3/4 sm:w-full lg:w-11/12 p-4 text-center text-base-color mb-4'>
                            <h1 className='text-4xl font-bold mb-1'>80</h1>
                            <h3 className='font-medium'>Completed Projects</h3>
                        </div>
                    </div>
                    <div className='px-4 flex flex-col sm:mb-16 justify-center'>
                        <p className='text-pretty'>Lorem ipsum dolor sit amet, consectetur  <br/>adipiscing elit. Sed tortor nisi, molestie eu dui ut, fringilla tristique quam
                        </p>
                        <div className="flex flex-col gap-4 text-text-color py-4">
                            <div className="flex items-center gap-2">
                                {InnerAlignmentIcon && <InnerAlignmentIcon />}
                                <span>Lorem, ipsum dolor sit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {InnerAlignmentIcon && <InnerAlignmentIcon />}
                                <span>Lorem, ipsum dolor sit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {InnerAlignmentIcon && <InnerAlignmentIcon />}
                                <span>Lorem, ipsum dolor sit</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={src4} alt="Experience" className='hidden md:hidden lg:block' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategic
