import { Request, Response } from "express";
import { questionrepo } from "../repositories/questionRepository";


export class QuestionController {
    async getAll(req: Request, res: Response) {
        const list = await questionrepo.find();
        return res.json(list)
    }
    async getOne(req: Request, res: Response) {
        const list = await questionrepo.find()
        const atual = list.find((o)=> o.selected===true)
        if(atual) {
            atual.selected = false
            await questionrepo.save(atual)
        }

        const id = req.params
        const item = await questionrepo.findOne({ where: id })
        if(item){
            item.selected = true
            await questionrepo.save(item)
        }
        return res.json(item)
    }

    async create(req: Request, res: Response) {
        const { nome,question } = req.body
        const newitem = questionrepo.create({
            nome,
            question,
            selected : false,
        })

        await questionrepo.save(newitem)
        return res.json(newitem)
    }
    async update(req: Request, res: Response) {
        
    }
    async delete(req: Request, res: Response) {
        const item_ = req.params
        const selected = await questionrepo.findOne({ where: item_ })
        if (!selected) return
        await questionrepo.remove(selected)
        return res.json('Pergunta Excluida')
    }
}