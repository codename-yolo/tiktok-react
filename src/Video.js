import video1 from './videos/video-1.mp4'
import { useRef, useState, forwardRef, useEffect, useImperativeHandle } from 'react'


function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            playvideo() {
                videoRef.current.play()
            },
            pausevideo() {
                videoRef.current.pause()
            }
        }
    })
    return (
        <video src={video1} ref={videoRef} style={{ width: 1000, height: 500 }}></video>
    )
}
export default forwardRef(Video)