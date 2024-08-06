import { serviceMethod1, serviceMethod2 } from "../../assets/images/services"
import { InnerAlignmentIcon } from '../../assets/icons'

function ServiceMethod() {
    return (
        <section className="grid lg:grid-cols-3 md:grid-cols-1 gap-2 py-16 px-28 bg-gradient-to-t from-white to-ground-color">
            <div className="lg:flex items-end justify-center custom-min:hidden ">
                <img src={serviceMethod1} alt="service Method" className="w-[90%]" />
            </div>
            <div className="lg:flex items-center custom-min:hidden">
                <img src={serviceMethod2} alt="service Method" className="w-[90%]" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-base-color text-2xl py-4">About Our Methods</h3>
                <h1 className="text-5xl font-semibold pb-4">Manage Business Ensure Success</h1>
                <p>Lorem, ipsum dolor sit amet odit reprehenderit quos omnis.</p>
                <div className="py-8 flex flex-col gap-4 text-text-color">
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
        </section>
    )
}

export default ServiceMethod
