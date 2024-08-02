import src from '../../../assets/images/dashboard/article-img.png'
import src1 from '../../../assets/images/dashboard/main-article-img.png'
import src2 from '../../../assets/images/dashboard/d-full-img.png'
import src3 from '../../../assets/images/dashboard/d-img1.png'
import src4 from '../../../assets/images/dashboard/d-img2.png'


function Home() {
    return (
        <div className="bg-ground-color">
            <section className="p-8 border-b border-slate-300">
                <div className='flex gap-4'>
                    <img src={src} alt="Articles" className='sm:w-12 custom-min:h-10 sm:h-12' />
                    <div>
                        <h3 className='text-xl font-semibold'>Is your interface design is misleading?</h3>
                        <p className='text-slate-400'>4 hrs ago</p>
                    </div>
                </div>
                <div className='py-4'>
                    <img src={src1} alt="Article images" className='pb-4' />
                    <p className='text-dashboard-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem
                        iaculis iaculis. Ut eu elit sed augue fringilla faucibus eget et enim.
                        Curabitur est tortor, viverra vitae tellus vel, luctus hendrerit enim.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis.
                        Ut eu elit sed augue fringilla faucibus eget et enim
                    </p>
                </div>
            </section>
            <section className="p-8 border-b border-slate-300">
                <div className='flex gap-4'>
                    <img src={src} alt="Articles" className='sm:w-12 custom-min:h-10 sm:h-12' />
                    <div>
                        <h3 className='text-xl font-semibold'>What sports drinks should athletes consume?
                        </h3>
                        <p className='text-slate-400'>4 hrs ago</p>
                    </div>
                </div>
                <p className='text-dashboard-para py-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis. Ut eu elit
                    sed augue fringilla faucibus eget et enim. Curabitur est tortor, viverra vitae tellus vel, luctus hendrerit enim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis.
                    Ut eu elit sed augue fringilla faucibus eget et enimLorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aliquam id nulla at sem iaculis iaculis. Ut eu elit sed augue fringilla faucibus eget et enim.
                    Curabitur est tortor, viverra vitae tellus vel, luctus hendrerit enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam id nulla at sem iaculis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nulla at sem iaculis iaculis.
                    Ut eu elit sed augue fringilla faucibus eget et enim read more
                </p>
            </section>
            <section className='p-8'>
                <div className='flex gap-4'>
                    <img src={src} alt="Articles" className='sm:w-12 custom-min:h-10 sm:h-12' />
                    <div>
                        <h3 className='text-xl font-semibold'>What sports drinks should athletes consume?
                        </h3>
                        <p className='text-slate-400'>4 hrs ago</p>
                    </div>
                </div>
                <div className='grid custom-md:grid-cols-2 gap-4 custom-min:grid-cols-1 py-4 place-items-center'>
                    <img src={src2} alt="image" />
                    <div className='flex flex-col gap-4'>
                        <img src={src3} alt="image" />
                        <img src={src4} alt="image" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
