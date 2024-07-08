import { Router } from "express";
import { getUsers, createUser, findById } from "../controllers/userController";
const router = Router();

router.get('/', getUsers);
router.get('/:id', findById);
router.post('/', createUser);

export default router;
