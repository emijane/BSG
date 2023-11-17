{/* Video Player component */}

function Video () {
    return (
    <div>
      <iframe className="max-w-full 
      w-[1280px] h-[720px] 
      xs:w-[600px] xs:h-[238px] 
      sm:w-[800px] sm:h-[450px]
      md:w-[1000px] md:h-[563px]
      lg:w-[1200px] lg:h-[675px]
      px-10" src="https://www.youtube.com/embed/-bz-qDxRRcg?si=nsQPJHjFbkGgb8L-"></iframe>
    </div>
    )
  }

  export default Video;