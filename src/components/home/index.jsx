import Strategic from "./Strategic"
import Planning from "./Planning"
import src from '../../assets/images/home/main-home-img.png';
import {BelowArrowIcon} from '../../assets/icons';

function HomeLayout() {
    return (
        <section>
            <div className="grid relative sm:grid-cols-[2fr_1.1fr] custom-min:grid-cols-1 custom-min:p-8 custom-md:p-12 custom-md:px-16">
                <h2 className="text-5xl font-semibold leading-tight md:ml-10">Strategy Solution for <br /> business success</h2>
                <p className="custom-min:pt-8 sm:pt-0 w-3/4 text-text-color flex items-center text-pretty">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi,
                    molestie eu dui ut, fringilla tristique quam.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                </p>
                    <div className="absolute right-36 bottom-10 border py-3 px-2.5 rounded-full">
                        {BelowArrowIcon && <BelowArrowIcon/>}
                    </div>
                    <div className="absolute -bottom-24 left-1/2 w-24 z-[-1] h-16 bg-[#DEEFFF] custom-shadow ">
                    </div>
            </div>
            <img src={src} alt="image" className="z-10 w-full h-[36rem] object-cover" />
            <Planning />
            <Strategic />
        </section>
    )
}

export default HomeLayout
