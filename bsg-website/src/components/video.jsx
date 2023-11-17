{/* Video Player component */}

function Video () {
    return (
    <div className="aspect-video max-w-6xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/FF3fuYLnApQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
    </div>
    )
  }

  export default Video;