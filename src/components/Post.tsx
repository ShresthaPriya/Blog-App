import postPic from "../assets/images/postpic.jpg";
import profile from "../assets/images/person.png";
import postPic2 from "../assets/images/post2.jpg";

const Post = () => {
    return (
        <div>
            <article className="flex flex-col justify-left gap-2 items-left mx-24 my-2.5">
                <div className="flex-col mb-8">
                    <button className="bg-[#4B6BFB] top-90 text-white p-2 rounded-md block">
                        Technology
                    </button>
                    <h1 className="font-medium text-2xl top-100 text-black mt-8 text-start">
                        The Impact of Technology on the Workplace:
                        <br />
                        How Technology is Changing
                    </h1>
                    <div className="flex justify-between gap-2">
                        <div className="flex items-center text-center gap-2 mt-8">
                            <img src={profile} alt="profile" className="w-8" />
                            <p className="font-[Work Sans] text-black">Tracey Wilson</p>

                            <p className="font-[Work Sans] text-black ml-8">
                                August 20, 2022
                            </p>
                        </div>
                    </div>
                </div>
                <figure>
                    <img src={postPic} alt="logo" className="w-400 h-150 rounded-md object-cover" />
                </figure>
                <section className="space-y-6 pt-12  text-[#3B3C4A] text-xl font-regular">
                    <p className="mb-8">
                        Traveling is an enriching experience that opens up new horizons,
                        exposes us to different cultures, and creates memories that last a
                        lifetime. However, traveling can also be stressful and overwhelming,
                        especially if you don't plan and prepare adequately. In this blog
                        article, we'll explore tips and tricks for a memorable journey and
                        how to make the most of your travels.
                    </p>

                    <p>
                        One of the most rewarding aspects of traveling is immersing yourself
                        in the local culture and customs. This includes trying local
                        cuisine, attending cultural events and festivals, and interacting
                        with locals. Learning a few phrases in the local language can also
                        go a long way in making connections and showing respect.
                    </p>

                    <h1 className="text-[#181A2A] text-2xl font-semibold">
                        Research Your Journey
                    </h1>
                    <p className="mb-8">
                        Before embarking on your journey, take the time to research your
                        destination. This includes understanding the local culture, customs,
                        and laws, as well as identifying top attractions, restaurants, and
                        accommodations. Doing so will help you navigate your destination
                        with confidence and avoid any cultural faux pas.
                    </p>

                    <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                        hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
                        faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
                        elementum nisi quis eleifend quam adipiscing vitae. Viverra
                        adipiscing at in tellus.
                    </p>

                    <h1 className="text-[#181A2A] text-2xl font-semibold">
                        Plan Your Itinerary
                    </h1>
                    <p className="">
                        While it's essential to leave room for spontaneity and unexpected
                        adventures, having a rough itinerary can help you make the most of
                        your time and budget. Identify the must-see sights and experiences
                        and prioritize them according to your interests and preferences.
                        This will help you avoid overscheduling and ensure that you have
                        time to relax and enjoy your journey.
                    </p>

                    <p>
                        Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
                        lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
                        felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
                    </p>
                </section>
                <div className="bg-red-50 border-2px rounded-xl mt-8 mb-8 p-8 border-l-4 border-[#E8E8EA]">
                    <q className="italic text-2xl leading-6">
                        Traveling can expose you to new environments and potential health
                        risks, so it's crucial to take precautions to stay safe and healthy.
                    </q>
                </div>

                <figure>
                    <img
                        src={postPic2}
                        alt="Post Picture"
                        className="w-400 h-150 rounded-xl object-cover"
                    />
                </figure>

                <div className="bg-[#E8E8EA] rounded-xl text-[#696A75] text-center mt-8 ml-12 mr-12 p-4">
                    <p className="text-sm font-regular ">Advertisement</p>
                    <p className="text-xl font-semibold">
                        You can place ads
                    </p>
                    <p className="text-lg font-regular">750x100</p>
                </div>
                <section className="space-y-6 pt-12  text-[#3B3C4A] text-xl font-regular">
                    <h1 className="text-[#181A2A] text-2xl font-semibold">
                        Pack Lightly and Smartly
                    </h1>
                    <p className="">
                        Packing can be a daunting task, but with some careful planning and
                        smart choices, you can pack light and efficiently. Start by making a
                        packing list and sticking to it, focusing on versatile and
                        comfortable clothing that can be mixed and matched. Invest in
                        quality luggage and packing organizers to maximize space and
                        minimize wrinkles.
                    </p>

                    <h1 className="text-[#181A2A] text-2xl font-semibold">
                        Stay Safe and Healthy
                    </h1>
                    <p>
                        
                        Traveling can expose you to new environments and potential health
                        risks, so it's crucial to take precautions to stay safe and healthy.
                        This includes researching any required vaccinations or medications,
                        staying hydrated, washing your hands frequently, and using sunscreen
                        and insect repellent. It's also essential to keep your valuables
                        safe and secure and to be aware of your surroundings at all times.
                    </p>

                    <h1 className="text-[#181A2A] text-2xl font-semibold">
                        Immerse Yourself in the Local Culture
                    </h1>
                    <p className="">
                        One of the most rewarding aspects of traveling is immersing yourself
                        in the local culture and customs. This includes trying local
                        cuisine, attending cultural events and festivals, and interacting
                        with locals. Learning a few phrases in the local language can also
                        go a long way in making connections and showing respect.
                    </p>

                    <h1 className="text-[#181A2A] text-2xl font-semibold">
                        Capture Memories
                    </h1>
                    <p className="">
                        Finally, don't forget to capture memories of your journey. Whether
                        it's through photographs, journaling, or souvenirs, preserving the
                        moments and experiences of your travels can bring joy and nostalgia
                        for years to come. However, it's also essential to be present in the
                        moment and not let technology distract you from the beauty of your
                        surroundings.
                    </p>

                    <h1 className="text-[#181A2A] text-2xl font-semibold">Conclusion:</h1>
                    <p className="">
                        Traveling is an art form that requires a blend of planning,
                        preparation, and spontaneity. By following these tips and tricks,
                        you can make the most of your journey and create memories that last
                        a lifetime. So pack your bags, embrace the adventure, and enjoy the
                        ride.
                    </p>
                </section>
            </article>
        </div>
    );
};

export default Post;
