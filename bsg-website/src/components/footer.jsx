{/* Footer Component */}
import ContactForm from "./contact-form";

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
                <ContactForm/>
            </div>
            <div className='p-10 text-center mt-10'>
                <p className='text-white'>© 2024 Black Sun Games LLC</p>
                <p className='text-white'>Icons made by Black Sun Games LLC</p>
                <p className='text-white'>Licensed by Black Sun Games LLC</p>
                <p className='text-white'>Website designed and developed by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emmadenunzio/" className='hover:cursor underline hover:text-orange-400 transition ease-in-out delay-50'>Emma DeNunzio</a></p>
            </div>
        </div>

    )
  }

  export default Footer;