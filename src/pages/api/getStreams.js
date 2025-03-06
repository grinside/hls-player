export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token !== "YOUR_SECRET_TOKEN") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  res.status(200).json({
    streams: [
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/a0e3f1a9-6758-4660-b209-481c00825873--globecastfr--omea--Maquisards_S2_EP01_1_4fb/_/hls_omea_aes/a0e3f1a9-6758-4660-b209-481c00825873--globecastfr--omea--Maquisards_S2_EP01_1_4fb.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/b7b2a1c6-7f8b-4268-8101-2e4d7eb25b8f--globecastfr--omea--Maquisards_S2_EP02_1_e86/_/hls_omea_aes/b7b2a1c6-7f8b-4268-8101-2e4d7eb25b8f--globecastfr--omea--Maquisards_S2_EP02_1_e86.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/7fa50787-f1eb-4fe2-b9a3-8935ea58f456--globecastfr--omea--Maquisards_S2_EP03_1_57c/_/hls_omea_aes/7fa50787-f1eb-4fe2-b9a3-8935ea58f456--globecastfr--omea--Maquisards_S2_EP03_1_57c.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/6652e69c-96ab-4382-a9e5-7a55d2c8dbf5--globecastfr--omea--Maquisards_S2_EP04_1_fe4/_/hls_omea_aes/6652e69c-96ab-4382-a9e5-7a55d2c8dbf5--globecastfr--omea--Maquisards_S2_EP04_1_fe4.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/138b00b7-d0eb-4d40-9834-898300191a50--globecastfr--omea--Maquisards_S2_EP05_1_70d/_/hls_omea_aes/138b00b7-d0eb-4d40-9834-898300191a50--globecastfr--omea--Maquisards_S2_EP05_1_70d.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/7bac5381-b8b4-4bd0-b8e8-eb3dd29a1d32--globecastfr--omea--Maquisards_S2_EP06_1_11c/_/hls_omea_aes/7bac5381-b8b4-4bd0-b8e8-eb3dd29a1d32--globecastfr--omea--Maquisards_S2_EP06_1_11c.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/b30930bf-55c9-4c31-8a45-77daf2b3a61c--globecastfr--omea--Maquisards_S2_EP07_1_2db/_/hls_omea_aes/b30930bf-55c9-4c31-8a45-77daf2b3a61c--globecastfr--omea--Maquisards_S2_EP07_1_2db.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/bab9b021-fe5a-4114-8ed8-86ba0b4acce7--globecastfr--omea--Maquisards_S2_EP08_1_32d/_/hls_omea_aes/bab9b021-fe5a-4114-8ed8-86ba0b4acce7--globecastfr--omea--Maquisards_S2_EP08_1_32d.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/42f16f3f-d31c-47bb-9aa8-22376c60b50d--globecastfr--omea--Maquisards_S2_EP09_1_eff/_/hls_omea_aes/42f16f3f-d31c-47bb-9aa8-22376c60b50d--globecastfr--omea--Maquisards_S2_EP09_1_eff.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/b6539d31-7e00-43bb-a6b1-6174f768e3e9--globecastfr--omea--Maquisards_S2_EP010_1_f85/_/hls_omea_aes/b6539d31-7e00-43bb-a6b1-6174f768e3e9--globecastfr--omea--Maquisards_S2_EP010_1_f85.m3u8", thumbnail: "/thumbnails/maq.jpg" },
      { url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/cdc3fdba-b148-4961-af48-33936e36821e--globecastfr--omea--Maquisards_S2_EP011_1_940/_/hls_omea_aes/cdc3fdba-b148-4961-af48-33936e36821e--globecastfr--omea--Maquisards_S2_EP011_1_940.m3u8", thumbnail: "/thumbnails/maq.jpg" },
    
      // Ajoute ici jusqu'à 25 flux
    ],
  });
}
  
 