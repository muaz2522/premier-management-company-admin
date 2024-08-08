import { specialty1, specialty2, specialty3 } from "../../assets/images/services"


function Specialty() {
    return (
        <div className="py-6 sm:px-24 custom-min:px-8 bg-core-color">
            <h1 className="text-4xl text-special-color special-font text-center">OUR SPECIALITY</h1>
            <div className="grid lg:grid-cols-3 custom-min:gap-8 sm:grid-cols-2 custom-min:grid-cols-1 py-8">
                <div className="relative flex justify-center">
                    <img src={specialty1} alt="specialty image" className="sm:w-[85%] custom-min:w-[60%] " />
                    <div className="bg-white py-4 absolute bottom-4 sm:w-[80%] text-center font-medium text-xl custom-min:w-[50%]">HR Consultant</div>
                </div>
                <div className="relative flex justify-center">
                    <img src={specialty2} alt="specialty image" className="sm:w-[85%] custom-min:w-[60%]" />
                    <div className="bg-white py-4 absolute bottom-4  text-center sm:w-[80%] text-xl font-medium custom-min:w-[50%]">Business Management</div>
                </div>
                <div className="relative flex justify-center">
                    <img src={specialty3} alt="specialty image" className="sm:w-[85%] custom-min:w-[60%] " />
                    <div className="bg-white py-4 absolute bottom-4   text-center sm:w-[80%] text-xl font-medium custom-min:w-[50%]">Management Consultant</div>
                </div>
            </div>
        </div>
    )
}

export default Specialty