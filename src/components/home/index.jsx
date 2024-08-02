import Strategic from "./Strategic"
import Planning from "./Planning"
import src from '../../assets/images/home/main-home-img.png';

function HomeLayout() {
    return (
        <section>
            <div className="grid sm:grid-cols-[2fr_1.5fr] custom-min:grid-cols-1 custom-min:p-8 custom-md:p-16">
                <h2 className="text-4xl font-semibold">Strategy Solution for <br /> business success</h2>
                {/* <div className="hidden sm:hidden md:block"></div> */}
                <p className="custom-min:pt-8 sm:pt-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi,
                    molestie eu dui ut, fringilla tristique quam.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                </p>
            </div>
            <img src={src} alt="image" />
            <Planning />
            <Strategic />
        </section>
    )
}

export default HomeLayout
