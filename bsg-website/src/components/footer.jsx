{/* Footer Component */}

function Footer () {
    return (
        <div className='bg-zinc-900'>
            <div className='flex xs:flex-col lg:flex-row xl:items-center sm:items-start px-10 py-20 xl:max-w-[70%] mx-auto'>
                <div className='flex flex-1 flex-col gap-3'>
                <h2 className='text-orange-300 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Contact Us</h2>
                <p className='text-white max-w-[80%]'>Feel free to reach out to us about business proposals or just to pay us a compliment. Don’t forget to check out our social media and like us on youtube!</p>
                <ul className="flex space-x-5">
                    <li className="text-white hover:text-orange-500 hover:-translate-y-1 transition ease-in-out delay-50 duration-300"><a href="https://store.steampowered.com/app/1998310/Max_Twist/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-steam text-2xl"></i></a></li>
                    <li className="text-white hover:text-orange-500 hover:-translate-y-1 transition ease-in-out delay-50 duration-300"><a href="https://twitter.com/Black_Sun_Games" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter text-2xl"></i></a></li>
                    <li className="text-white hover:text-orange-500 hover:-translate-y-1 transition ease-in-out delay-50 duration-300"><a href="https://www.patreon.com/blacksungames" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-patreon text-2xl"></i></a></li>
                </ul>
                </div>
                <form 
                className='flex flex-1 flex-col gap-4 items-center mt-5 w-full'
                action="https://getform.io/f/728263a9-167f-416d-a856-dfdefdfc2403" method="POST">
                    <input className='rounded-xl p-4 w-full' type="text" placeholder='Name' name="name" />
                    <input className='rounded-xl p-4 w-full' type="email" placeholder='E-mail' name="email" />
                    <input className='rounded-xl px-4 pb-12 w-full' type="text" placeholder='Message' name="message" />
                    <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
                    <button type="submit" className='bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 font-semibold text-white py-3 px-5 rounded-full w-full xl:max-w-[30%] xs:max-w-full'>Send Message</button>
                </form>
            </div>
            <div className='p-10 text-center mt-10'>
                <p className='text-white'>© 2024 Black Sun Games LLC</p>
                <p className='text-white'>Icons made by Black Sun Games LLC</p>
                <p className='text-white'>Licensed by Black Sun Games LLC</p>
                <p className='text-white'>Website designed and developed by Emma DeNunzio</p>
            </div>
        </div>

    )
  }

  export default Footer;