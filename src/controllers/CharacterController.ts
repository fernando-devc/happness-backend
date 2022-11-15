import { Request, Response } from "express";
import { characterrepo } from "../repositories/characterRepository";



export class CharacterController {
    
    async getAll(req: Request, res: Response) {
        const list = await characterrepo.find();
        return res.json(list)
    }
    async getOne(req: Request, res: Response) {
        const id = req.params
        const item = await characterrepo.findOne({ where: id })
        return res.json(item)
    }

    async create(req: Request, res: Response) {
        if(!req.query.name && !req.query.character) return res.json('Preeencha nome e personagem')
        const { name,character } = req.query;
        const nome = String(name);
        const personagem = String(character);
        const newitem = characterrepo.create({
            name:nome,
            character:personagem,
        })
        if(!req.file) return
        const dir = req.file.path
        newitem.photo_url = dir


        await characterrepo.save(newitem)

        return res.json(newitem)
    }
    async update(req: Request, res: Response) {
        const id = req.params
        const {name, character} = req.body;
        const item = await characterrepo.findOne({ where: id })
        if(!item) return
        item.name = name;
        item.character = character;
        await characterrepo.save(item)
        return res.json(item);
        
    }
    async delete(req: Request, res: Response) {
        const item_ = req.params
        const selected = await characterrepo.findOne({ where: item_ })
        if (!selected) return
        await characterrepo.remove(selected)
        return res.json('Personagem Excluido')
    }
}