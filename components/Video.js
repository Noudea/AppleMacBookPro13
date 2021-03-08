const Video = () => {
    return(
        <>
        <style jsx>{`
            .video {
                width:100%;
            }
            
            `}</style>
            <video autoPlay={true} className="video" muted src="/video/small_2x.mp4"></video>
        </>
    )
}

export default Video