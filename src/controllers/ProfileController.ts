import { Request, Response } from 'express'
import { isErrored } from 'stream'
import { BadRequestError } from '../helpers/api-erros'
import { profileRepository } from '../repositories/profileRepository'

export class ProfileController {

    async create(req: Request, res: Response) {
        const { name, user } = req.body
        const newProfile = profileRepository.create({
            name,
            user
        })
        await profileRepository.save(newProfile)
        return res.status(201).json(newProfile)
    }

    async getProfile(req: Request, res: Response) {
        const user = req.user
        const profile = await profileRepository.find({ relations: { user: true }, where: { user } })
        return res.json(profile[0])
    }

    async profileUpdate(req: Request, res: Response) {
        const { name, description, status, photoUrl, slug } = req.body
        const { password: _, ...user } = req.user
        const profile = await profileRepository.findOne({ where: user.profile })
        if (!profile) return
        profile.name = name ? name : profile?.name
        profile.description = description ? description : profile?.description
        profile.status = status ? status : profile?.status
        profile.photoUrl = photoUrl ? photoUrl : profile?.photoUrl
        profile.slug = slug ? slug : profile?.slug
        await profileRepository.save(profile)
        res.json(profile)
    }
}