import { specialty1, specialty2, specialty3 } from "../../assets/images/services"


function Specialty() {
    return (
        <div className="py-16 px-32 bg-core-color">
            <h1 className="text-4xl text-special-color font-colona text-center">OUR SPECIALTY</h1>
            <div className="grid grid-cols-3 py-8">
                <div className="relative flex justify-center">
                    <img src={specialty1} alt="specialty image" className="w-[80%] rounded" />
                    <div className="bg-white py-2 absolute bottom-4 w-[70%] text-center font-medium">HR Consultant</div>
                </div>
                <div className="relative flex justify-center">
                    <img src={specialty2} alt="specialty image" className="w-[80%] rounded" />
                    <div className="bg-white py-2 absolute bottom-4 font-medium text-center w-[70%]">Business Management</div>
                </div>
                <div className="relative flex justify-center">
                    <img src={specialty3} alt="specialty image" className="w-[80%] rounded" />
                    <div className="bg-white py-2 absolute bottom-4 font-medium  text-center w-[70%]">Management Consultant</div>
                </div>
            </div>
        </div>
    )
}

export default Specialty


