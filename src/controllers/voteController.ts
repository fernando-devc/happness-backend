import { Request, Response } from "express";

import { voterepo } from "../repositories/voterepository";



export class VoteController {
    async getAll(req: Request, res: Response) {
        const list = await voterepo.find({relations:{character:true,votacao:true}});
        return res.json(list)
    }
    
    async create(req: Request, res: Response) {
        const { votacao, character } = req.body
        const newitem = voterepo.create({
            votacao,
            character,
        })
        await voterepo.save(newitem)
        return res.json(newitem)
    }
   
}