import { Request, Response } from "express";
import { votacaorepo } from "../repositories/votacaorepository";



export class VotacaoController {
    async getAll(req: Request, res: Response) {
        const list = await votacaorepo.find({relations:{
            character_1:true,
            character_2:true
        }});
        return res.json(list)
    }
    async getOne(req: Request, res: Response) {
        const id = req.params
        const item = await votacaorepo.findOne({
            where: id, relations: {
                character_1:true,
                character_2:true,
                vote:true,
            }
        })
        return res.json(item)
    }

    async create(req: Request, res: Response) {

        const { character_1,character_2,open } = req.body
        const newitem = votacaorepo.create({
            open,
            character_1,
            character_2
        })

        await votacaorepo.save(newitem)
        return res.json(newitem)
    }
    async update(req: Request, res: Response) {
        const id = req.params;
        const item = await votacaorepo.findOne({ where: id })
        if(!item) return
        const { character_1,character_2,open } = req.body
        item.character_1 = character_1 ? character_1 : item.character_1;
        item.character_2 = character_2 ? character_2 : item.character_2;
        item.open = open ? open :item.open

        await votacaorepo.save(item)
        return res.status(200).json(item);
        
    }
    async delete(req: Request, res: Response) {
        const item_ = req.params
        const selected = await votacaorepo.findOne({ where: item_ })
        if (!selected) return
        await votacaorepo.remove(selected)
        return res.json('Pergunta Excluida')
    }
}