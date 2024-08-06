import ButtonLink from '../../ui/ButtonLink';
import src from '../../assets/images/main-app-img-white.png';
import src1 from '../../assets/images/home/strategy-1.png';
import src2 from '../../assets/images/home/strategy-2.png';
import src3 from '../../assets/images/home/market-analysis.png';
import src4 from '../../assets/images/home/retention.png';
import src5 from '../../assets/images/home/solution.png';
import src6 from '../../assets/images/home/recruitment-human.png';


function Planning() {
    return (
        <section >
            <div className='grid md:grid-cols-2 sm:grid-cols-1 custom-min:gap-16 custom-md:gap-24 sm:gap-40 custom-min:p-8 custom-md:p-24'>
                <div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-base-color font-medium'>Who we are</h3>
                        <h1 className='text-4xl font-semibold custom-min:w-full py-4 ml-16'>Your trusted strategic <br /> planning Consulter</h1>
                    </div>
                    <div className='flex flex-col items-end gap-4'>
                        <p className='w-[70%]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed tortor nisi, molestie eu dui ut, fringilla tristique quam
                        </p>
                        <img src={src1} alt="strategy 1" className='w-[70%]' />
                    </div>
                </div>
                <div>
                    <img src={src2} alt="strategy 1" />
                </div>
            </div>
            <div className='grid md:grid-cols-[1.4fr_1fr] sm:grid-cols-1 custom-min:gap-16 lg:gap-24'>
                <div className='bg-core-color py-24 sm:py-16 custom-min:p-8 custom-md:px-24 flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold text-base-color'>WHAT WE DO</h3>
                    <p className='w-3/4 text-pretty'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi, molestie eu dui ut, fringilla tristique quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi, molestie eu dui ut, fringilla tristique quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
                <div className='grid md:grid-cols-2 sm:grid-cols-4 gap-4 custom-md:grid-cols-3 custom-min:grid-cols-2 place-items-center custom-min:mx-8 sm:mr-8 lg:mr-40'>
                    <div className='w-full gap-2 py-12 bg-core-color flex flex-col items-center justify-center'>
                        <img src={src3} alt="growth" className='w-1/4' />
                        <h3 className='font-semibold text-xl text-base-color text-center'>Strategy <br /> Growth</h3>
                    </div>
                    <div className='w-full gap-2 py-12 bg-core-color flex flex-col items-center justify-center'>
                        <img src={src4} alt="growth" className='w-1/4' />
                        <h3 className='font-semibold text-xl text-base-color text-center'>Valuable <br /> Ideas</h3>
                    </div>
                    <div className='w-full gap-2 py-12 bg-core-color flex flex-col items-center justify-center'>
                        <img src={src5} alt="growth" className='w-1/4' />
                        <h3 className='font-semibold text-xl text-base-color text-center'>Retention <br /> Management</h3>
                    </div>
                    <div className='w-full gap-2 py-12 bg-core-color flex flex-col items-center justify-center'>
                        <img src={src6} alt="growth" className='w-1/4' />
                        <h3 className='font-semibold text-xl text-base-color text-center'>Recruitment <br /> Consultant</h3>
                    </div>
                </div>
            </div>
            <div className='bg-base-color px-16 py-8 grid sm:grid-cols-2 custom-min:grid-cols-1 place-items-center mt-16'>
                <div className='sm:inline-block custom-min:flex custom-min:mb-4 sm:mb-0 justify-center '>
                    <img src={src} alt="growth" className='md:w-1/4 custom-min:w-2/4' />
                </div>
                <div className='flex items-center justify-center custom-min:gap-4 custom-min:w-full md:w-11/12  md:gap-16 text-white'>
                    <h3>Have any Question?</h3>
                    <ButtonLink link="/contact" text="Get in Touch" className="custom-min:px-4 custom-min:w-1/2 custom-md:w-2/5 custom-min:py-2" classLink="text-base-color hover:text-slate-900" color="white" />
                </div>
            </div>
        </section>
    )
}

export default Planning
