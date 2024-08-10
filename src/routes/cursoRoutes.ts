import { Router } from "express";
import { CursoController } from "../controllers/cursoController";

const router = Router();

router.get("/cursos", CursoController.getAll);
router.get("/cursos/:id", CursoController.getById);

export default router;


