import exrpess from "express";
import { login, register } from "../controllers/auth.js";

const router = exrpess.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
