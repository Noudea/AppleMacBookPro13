const Video = (props) => {
    return(
        <>
        <style jsx>{`
            .video {
                width:100%;
            }
            
            `}</style>
            <video autoPlay={true} className="video" muted src={props.src}></video>
        </>
    )
}

export default Video