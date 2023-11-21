{/* Video Player component */}

function Developers () {
    return (
        <div>
            <div className="text-center px-4">
                <h2 className='text-orange-400 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10'>Our Devs</h2>
                <p className='text-white md:text-lg lg:text-base opacity-80 mt-2'>We like to keep things fun and real, so our fans can really get to know who we are.</p>
            </div>
            <div className='flex gap-10 xs:flex-col xl:flex-row justify-center items-center mx-10'>
                <div className='flex flex-col justify-center items-center text-center gap-6 mt-5'>
                    <img src='https://i.ibb.co/cNxgFQB/scientist.png' className='xs:max-w-[50%] sm:max-w-[20%] md:max-w-[20%] lg:max-w-[22%] xl:max-w-[30%]'/>
                    <h3 className='max-w-md text-2xl text-orange-400 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>Mad Scientist Drake</h3>
                    <p className='text-white max-w-md'>The Mad Scientist is the company&apos;s President and one of the main developers for UI, and game development. He has created many potent potions to keep the crew running when nothing else works. He prays to the &quot;Lord of Latte&quot; and is a major reason the work gets done.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center gap-6'>
                    <img src='https://i.ibb.co/YL24YNT/admiral.png' className='xs:max-w-[50%] sm:max-w-[20%] md:max-w-[20%] lg:max-w-[22%] xl:max-w-[30%]'/>
                    <h3 className='max-w-md text-2xl text-orange-400 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>Admiral Starburns</h3>
                    <p className='text-white max-w-md'>The Admiral keeps us all in line when we have bad ideas and gives us ideas that are far better but not always agreeable. He is the Secretary for the company and keeps track of the social media with a little help from Drake. If you&apos;ve seen anything on our twitter / facebook blame him. He keeps the media flowing.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center gap-6'>
                    <img src='https://i.ibb.co/9Ynj8Rk/commander.png' className='xs:max-w-[50%] sm:max-w-[20%] md:max-w-[20%] lg:max-w-[22%] xl:max-w-[30%]'/>
                    <h3 className='max-w-md text-2xl text-orange-400 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>Flight Commander Penguin</h3>
                    <p className='text-white max-w-md'>Penguin is the almighty leader in all things Dev, Math, and Physics. He is the company treasurer, but more than that, he bends the laws at his will and breaks them with the stroke of his keys if they don&apos;t fit his needs. He can and will recreate gravity at every possible turn and ensures that the complex systems are operating on all reactors. Nuclear fission will not occur without his explicit permission as he is the master programmer for the team.</p>
                </div>
            </div>
        </div>
    )
  }

  export default Developers;