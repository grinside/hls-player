import jwt from "jsonwebtoken";

const SECRET_KEY = "super_secret_key"; // 🔴 Change cette clé pour une vraie clé sécurisée !

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  // Vérifier si le token est présent et valide
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token manquant ou invalide" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return res.status(403).json({ error: "Token invalide ou expiré" });
  }

  // Liste des flux avec le nom des épisodes
  const streams = [
    {
      url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/a0e3f1a9-6758-4660-b209-481c00825873--globecastfr--omea--Maquisards_S2_EP01_1_4fb/_/hls_omea_aes/a0e3f1a9-6758-4660-b209-481c00825873--globecastfr--omea--Maquisards_S2_EP01_1_4fb.m3u8",
      thumbnail: "/thumbnails/maq.jpeg",
      episodeName: "Maquisards S2 - Épisode 1",
    },
    {
      url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/b7b2a1c6-7f8b-4268-8101-2e4d7eb25b8f--globecastfr--omea--Maquisards_S2_EP02_1_e86/_/hls_omea_aes/b7b2a1c6-7f8b-4268-8101-2e4d7eb25b8f--globecastfr--omea--Maquisards_S2_EP02_1_e86.m3u8",
      thumbnail: "/thumbnails/maq.jpeg",
      episodeName: "Maquisards S2 - Épisode 2",
    },
    {
      url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/7fa50787-f1eb-4fe2-b9a3-8935ea58f456--globecastfr--omea--Maquisards_S2_EP03_1_57c/_/hls_omea_aes/7fa50787-f1eb-4fe2-b9a3-8935ea58f456--globecastfr--omea--Maquisards_S2_EP03_1_57c.m3u8",
      thumbnail: "/thumbnails/maq.jpeg",
      episodeName: "Maquisards S2 - Épisode 3",
    },
    {
      url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/6652e69c-96ab-4382-a9e5-7a55d2c8dbf5--globecastfr--omea--Maquisards_S2_EP04_1_fe4/_/hls_omea_aes/6652e69c-96ab-4382-a9e5-7a55d2c8dbf5--globecastfr--omea--Maquisards_S2_EP04_1_fe4.m3u8",
      thumbnail: "/thumbnails/maq.jpeg",
      episodeName: "Maquisards S2 - Épisode 4",
    },
    {
      url: "https://gcvip.cdb.cdn.orange.com/vod/catchup-nas/138b00b7-d0eb-4d40-9834-898300191a50--globecastfr--omea--Maquisards_S2_EP05_1_70d/_/hls_omea_aes/138b00b7-d0eb-4d40-9834-898300191a50--globecastfr--omea--Maquisards_S2_EP05_1_70d.m3u8",
      thumbnail: "/thumbnails/maq.jpeg",
      episodeName: "Maquisards S2 - Épisode 5",
    }
  ];

  return res.status(200).json({ streams });
}
