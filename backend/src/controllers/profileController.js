const db = require("../models/db");
const { decrypt } = require("../utils/encryption");

exports.getProfile = (req, res) => {
  const userId = req.user.id;

  db.get("SELECT id, name, email, aadhaar_encrypted FROM users WHERE id = ?", [userId], (err, user) => {
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const decryptedAadhaar = decrypt(user.aadhaar_encrypted);

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      aadhaar: decryptedAadhaar
    });
  });
};
