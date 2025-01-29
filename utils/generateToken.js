import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export default function generateToken(id, email) {
    return jwt.sign({ id, email }, JWT_SECRET, {
        expiresIn: "30d"
    });
}