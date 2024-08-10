import { Request, Response } from 'express';
import { Aluno } from '../models/aluno';

export class AlunoController {
  static async getAll(req: Request, res: Response) {
    try{
      const alunos = await Aluno.getAll();
      res.status(200).json(alunos);
    } catch(erro) {
      res.status(500).json({message:erro})
    }
   
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.getById(parseInt(id, 10));
      res.status(200).json(aluno)
    } catch(erro) {
      res.status(404).json({message : erro});
    }
  }

  static async create(req: Request, res: Response) {
    const { nome, email, idCurso } = req.body;
    const result = await Aluno.create(nome, email, idCurso);
    res.json(result);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, idCurso } = req.body;
    const result = await Aluno.update(parseInt(id, 10), nome, email, idCurso);
    res.json(result);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await Aluno.delete(parseInt(id, 10));
    res.json(result);
  }
}