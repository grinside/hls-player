import { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import ThumbnailGrid from "@/components/ThumbnailGrid";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [streams, setStreams] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const response = await fetch("/api/getToken");
      const data = await response.json();
      setToken(data.token);
    }
    fetchToken();
  }, []);

  useEffect(() => {
    async function fetchStreams() {
      if (!token) return;
      const response = await fetch("/api/getStreams", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setStreams(data.streams);
      if (data.streams.length > 0) setVideoSrc(data.streams[0].url);
    }
    fetchStreams();
  }, [token]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">HLS Video Player</h1>
      <VideoPlayer videoSrc={videoSrc} />
      <ThumbnailGrid streams={streams} onSelect={setVideoSrc} />
    </div>
  );
}
