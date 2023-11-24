{/* Contact Form Component */}

function ContactForm () {
    return (
        <form 
        className='flex flex-1 flex-col gap-4 items-center mt-5 w-full'
        action="https://getform.io/f/cb3b51f4-2e82-4d8c-9b69-345ea29871c5" 
        method="POST">
            <input className='rounded-xl p-4 w-full' type="text" placeholder='Name' name="name" required/>
            <input className='rounded-xl p-4 w-full' type="email" placeholder='E-mail' name="email" required />
            <input className='rounded-xl px-4 pb-12 w-full' type="text" placeholder='Message' name="message" required />
            <input type="hidden" name="_gotcha" style={{ display: 'none' }} required />
            <button 
                type="submit" 
                className='bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 font-semibold text-white py-3 px-5 rounded-full w-full xl:max-w-[30%] xs:max-w-full'>Send Message</button>
        </form>
    )
  }

  export default ContactForm;