export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token !== "YOUR_SECRET_TOKEN") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  res.status(200).json({
    streams: [
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/a0e3f1a9-6758-4660-b209-481c00825873--globecastfr--omea--Maquisards_S2_EP01_1_4fb/_/hls_omea_aes/a0e3f1a9-6758-4660-b209-481c00825873--globecastfr--omea--Maquisards_S2_EP01_1_4fb.m3u8", thumbnail: "https://tf.orange.com/thumbnail/65040505ca664cf1974b/1024/Maquisards_S2_EP01_P1.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/b7b2a1c6-7f8b-4268-8101-2e4d7eb25b8f--globecastfr--omea--Maquisards_S2_EP02_1_e86/_/hls_omea_aes/b7b2a1c6-7f8b-4268-8101-2e4d7eb25b8f--globecastfr--omea--Maquisards_S2_EP02_1_e86.m3u8 ", thumbnail: "https://tf.orange.com/thumbnail/362ae46cd32b4a11bded/1024/Maquisards_S2_EP02_P1.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/7fa50787-f1eb-4fe2-b9a3-8935ea58f456--globecastfr--omea--Maquisards_S2_EP03_1_57c/_/hls_omea_aes/7fa50787-f1eb-4fe2-b9a3-8935ea58f456--globecastfr--omea--Maquisards_S2_EP03_1_57c.m3u8", thumbnail: "https://tf.orange.com/thumbnail/65040505ca664cf1974b/1024/Maquisards_S2_EP01_P1.jp" },
      // Ajoute ici jusqu'à 25 flux
    ],
  });
}
  
 