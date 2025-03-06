import { useState, useEffect } from "react";
import { VideoPlayer } from "../components/VideoPlayer";
import { ThumbnailGrid } from "../components/ThumbnailGrid";

export default function HLSPlayer() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [streams, setStreams] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const response = await fetch("/api/getToken");
      const data = await response.json();
      setToken(data.token);
      console.log("Token JWT reçu !! :", data.token); // 🔍 DEBUG
    }
    fetchToken();
  }, []);

  useEffect(() => {
    async function fetchStreams() {
      if (!token) return;

      console.log("Token envoyé :", token); // 🔍 DEBUG

      const response = await fetch("/api/getStreams", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erreur API :", errorData); // 🔍 DEBUG
        return;
      }

      const data = await response.json();
      setStreams(data.streams);
      if (data.streams.length > 0) setVideoSrc(data.streams[0].url);
    }

    fetchStreams();
  }, [token]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">HLS Video Player</h1>
      <VideoPlayer videoSrc={videoSrc} />
      <ThumbnailGrid streams={streams} onSelect={setVideoSrc} />
    </div>
  );
}
