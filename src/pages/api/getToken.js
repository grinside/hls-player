import jwt from "jsonwebtoken";

const SECRET_KEY = "super_secret_key"; // 🔴 Change ça par une vraie clé sécurisée !

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  // Créer un token JWT avec une durée de validité de 1 heure
  const token = jwt.sign({ user: "authorized_user" }, SECRET_KEY, { expiresIn: "1h" });

  return res.status(200).json({ token });
}