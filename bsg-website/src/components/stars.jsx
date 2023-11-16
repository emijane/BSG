{/* import ImageComponent from "./image-content";*/}
import ImageComponent from "./image-content";
import Video from "./video";

{/* Star background component */}

function Stars () {
    return (
        <div className="relative mt-[-1px]">
            {/* Stars background */}
            <div className="bg-stars bg-cover bg-center relative z-0 bg-repeat flex flex-col justify-center items-center gap-20">
                <div className="max-w-2xl mx-auto text-center px-4">
                    <h2 className='text-white xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10'>Featured Game: Max Twist</h2>
                    <p className='text-white md:text-lg lg:text-base opacity-80 mt-2'>Release Date: 4th Quarter 2023</p>
                    <button className="bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 font-semibold text-white py-3 px-5 rounded-full mt-3">Check us out on Steam!</button>
                </div>
                <Video/>
                <div className='flex flex-col gap-20 mt-20 max-w-[70%] px-10'>
                    <ImageComponent
                        title="Lorem Ipsum Dolor Amet"
                        description="In this futuristic Xtreme Sport, players mount hover boards and spiral down a tube in space full of obstacles. Smoke speed records and set new max twists to a heart-pumping soundtrack. Inspired by games like 1080° Snowboarding, Max Twist takes the concept to the space age."
                        imageUrl="./src/images/gameplay-1.png"
                        order="first" // or order="first"
                    />
                    <ImageComponent
                        title="Lorem Ipsum Dolor Amet"
                        description="In this futuristic Xtreme Sport, players mount hover boards and spiral down a tube in space full of obstacles. Smoke speed records and set new max twists to a heart-pumping soundtrack. Inspired by games like 1080° Snowboarding, Max Twist takes the concept to the space age."
                        imageUrl="./src/images/gameplay-3.png"
                        order="last" // or order="first"
                    />
                    <ImageComponent
                        title="Lorem Ipsum Dolor Amet"
                        description="In this futuristic Xtreme Sport, players mount hover boards and spiral down a tube in space full of obstacles. Smoke speed records and set new max twists to a heart-pumping soundtrack. Inspired by games like 1080° Snowboarding, Max Twist takes the concept to the space age."
                        imageUrl="./src/images/gameplay-3.png"
                        order="first" // or order="first"
                    />
                </div>
            </div>
        </div>
    )
  }

  export default Stars;