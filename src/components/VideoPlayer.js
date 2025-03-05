import { useEffect } from "react";
import Hls from "hls.js";

export default function VideoPlayer({ videoSrc }) {
  useEffect(() => {
    if (videoSrc) {
      const video = document.getElementById("video-player");
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
    <div className="w-full max-w-md">
      <video id="video-player" controls className="w-full rounded-lg shadow-lg"></video>
    </div>
  );
}
