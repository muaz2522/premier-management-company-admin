import ServiceMethod from "./ServiceMethod"
import Services from "./Services";
import Specialty from './Specialty';

function Service() {
    return (
        <section>
            <h2 className="text-4xl font-semibold text-center my-8 relative bg-white pb-4">Our Services</h2>
            <ServiceMethod />
            <Specialty />
            <Services />
        </section>
    )
}

export default Service


