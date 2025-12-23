const db = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { encrypt } = require("../utils/encryption");

exports.register = (req, res) => {
  const { name, email, password, aadhaar } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const encryptedAadhaar = encrypt(aadhaar);

  const query = `
    INSERT INTO users (name, email, password, aadhaar_encrypted)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [name, email, hashedPassword, encryptedAadhaar], function (err) {
    if (err) {
      return res.status(400).json({ message: "User already exists" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  });
};
