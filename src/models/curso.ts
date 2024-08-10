import { db } from "../db";

export class Curso {
    private id: number;
    private nome: string;
    private descricao: string;

    constructor(id: number, nome: string, descricao: string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    static async getAll() {
        try {
        const [rows] = await db.query("SELECT * FROM CURSOS")
        return rows;
        } catch {
            throw new Error ("Erro ao buscar cursos no banco de dados.")
        }
    }

    static async getById(id: number) {
        try {
        const [rows] = await db.query("SELECT * FROM CURSOS WHERE ID = ?", [id]);
        return rows;
        } catch {
            throw new Error("Problema ao buscar o curso no banco de dados.");
        }
    }
}