import admin from "../config/firebaseAdmin.js";

const firebaseAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    req.firebaseUser = decoded; // ✅ FIXED: was req.user

    next();
  } catch (err) {
    console.error("firebaseAuth error:", err.message);
    res.status(401).json({ message: "Invalid token" });
  }
};

export default firebaseAuth;