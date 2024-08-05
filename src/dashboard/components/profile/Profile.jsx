import src from '../../../assets/images/dashboard/profile-img.png'
import cv from '../../../assets/images/dashboard/pdf.png'

function Profile() {
    return (
        <div className="bg-ground-color">
            <section className="p-8 grid custom-min:grid-cols-1 lg:grid-cols-[1fr_5fr] gap-8">
                <div className='custom-md:flex sm:gap-4 custom-min:block'>
                    <div>
                        <img src={src} alt='profile' className='w-4/5 custom-min:w-3/5' />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-base-color my-2'>John Doe</h2>
                        <p className='text-dashboard-para'>johndeo@gmail.com</p>
                        <p className='mt-2 text-dashboard-para'>+91 33 333 333</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h3 className='text-base-color font-semibold text-lg'>About You</h3>
                        <p className='text-dashboard-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis. Ut eu elit sed augue fringilla faucibus eget et enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis. Ut eu elit sed augue fringilla faucibus eget et enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis. Ut eu elit sed augue fringilla faucibus eget et enim..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis. Ut eu elit sed augue fringilla faucibus eget et enim..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis. Ut eu elit sed augue fringilla faucibus eget et enim.
                        </p>
                    </div>
                    <div className='grid custom-min:grid-cols-1 custom-md:grid-cols-2 md:gap-4 lg:grid-cols-3 pb-8'>
                        <div>
                            <h3 className='text-base-color font-semibold text-lg'>Job Title</h3>
                            <p className='text-dashboard-para'>Software Engineer</p>
                        </div>
                        <div>
                            <h3 className='text-base-color font-semibold text-lg'>Job Experience</h3>
                            <p className='text-dashboard-para'>4+ years</p>
                        </div>
                        <div>
                            <h3 className='text-base-color font-semibold text-lg'>Your Curriculum Vitae
                            </h3>
                            <div className='flex gap-4'>
                                <img src={cv} alt="cv" className='w-8' />
                                <span className='text-dashboard-para'>john_cv.pdf</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
