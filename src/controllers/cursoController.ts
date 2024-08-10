import { Curso } from "../models/curso";
import { Request, Response } from "express";

export class CursoController {

    static async getAll(req: Request, res: Response){
        try {
            const cursos = await Curso.getAll();
            res.status(200).json(cursos);
        } catch(erro){
            res.status(500).json({message: erro})
        }
    }

    static async getById(req: Request, res: Response){
        try {
            const {id} = req.params;
            const cursos = await Curso.getById(parseInt(id, 10));
            res.status(200).json(cursos);
        } catch(erro){
            res.status(404).json({mensagem: erro});
        }
    }
}