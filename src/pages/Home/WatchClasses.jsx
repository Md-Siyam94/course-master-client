import SectionHeading from "../../components/shared/SectionHeading";


const WatchClasses = () => {
    return (
        <div className="bg-[#F9F9F9] py-24 px-4">
            <SectionHeading heading={"Watch Our Classes"} title={"Get Instant Access to The Free Self Development Course"} style={"w-1/2 items-center "} ></SectionHeading>
            <div className="p-3 rounded-2xl bg-base-100 max-w-7xl mx-auto ">
                <img className="rounded-2xl" src="https://i.ibb.co/4Z09CmpH/video-img.png" alt="" />
                <div className="lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center   mt-10 mb-2">
                    <div className=" flex flex-col md:flex-row  items-center gap-3 md:justify-start justify-center ">
                        <img className="bg-[#DFF2F1] rounded-lg px-3 py-4" src="https://i.ibb.co/qY608Xbt/image.png" alt="" />
                        <h3 className="text-lg mb-3 md:mb-0 font-semibold">Audio Classes</h3>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-3 md:justify-start justify-center ">
                        <img className="bg-[#DFF2F1] rounded-lg px-2 py-5" src="https://i.ibb.co/4wQ6Nj85/image.png" alt="" />
                        <h3 className="text-lg mb-3 md:mb-0 font-semibold">Audio Recording</h3>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-3 md:justify-start justify-center ">
                        <img className="bg-[#DFF2F1] rounded-lg px-3 py-3" src="https://i.ibb.co/8DNCyMdQ/image.png" alt="" />
                        <h3 className="text-lg mb-3 md:mb-0 font-semibold">Recorded Classes</h3>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center gap-3 md:justify-start justify-center  ">
                        <img className="bg-[#DFF2F1] rounded-lg px-3 py-3" src="https://i.ibb.co/SD3n2LZd/image.png" alt="" />
                        <h3 className="text-lg mb-3 md:mb-0 font-semibold">Support Available </h3>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WatchClasses;