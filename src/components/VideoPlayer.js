import { useEffect, useRef } from "react";
import Hls from "hls.js";

export function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoSrc) {
      const video = videoRef.current;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSrc;
      }
    }
  }, [videoSrc]);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-black">
      <video ref={videoRef} controls className="w-full h-full object-cover rounded-lg shadow-lg"></video>
    </div>
  );
}