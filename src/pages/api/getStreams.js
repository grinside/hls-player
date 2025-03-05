export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token !== "YOUR_SECRET_TOKEN") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  res.status(200).json({
    streams: [
      { url: "https://example.com/stream1.m3u8", thumbnail: "/thumbnails/1.jpg" },
      { url: "https://example.com/stream2.m3u8", thumbnail: "/thumbnails/2.jpg" },
      // Ajoute ici jusqu'à 25 flux
    ],
  });
}
