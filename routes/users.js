import exrpess from "express";
import { deleteUser, getUser, updateUser } from "../controllers/user.js";

const router = exrpess.Router();

//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getUser);

export default router;
