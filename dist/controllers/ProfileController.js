"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const profileRepository_1 = require("../repositories/profileRepository");
class ProfileController {
    async create(req, res) {
        const { name, user } = req.body;
        const newProfile = profileRepository_1.profileRepository.create({
            name,
            user
        });
        await profileRepository_1.profileRepository.save(newProfile);
        return res.status(201).json(newProfile);
    }
    async getProfile(req, res) {
        const user = req.user;
        const profile = await profileRepository_1.profileRepository.find({ relations: { user: true }, where: { user } });
        return res.json(profile[0]);
    }
    async profileUpdate(req, res) {
        const { name, description, status, photoUrl, slug } = req.body;
        const { password: _, ...user } = req.user;
        const profile = await profileRepository_1.profileRepository.findOne({ where: user.profile });
        if (!profile)
            return;
        profile.name = name ? name : profile === null || profile === void 0 ? void 0 : profile.name;
        profile.description = description ? description : profile === null || profile === void 0 ? void 0 : profile.description;
        profile.status = status ? status : profile === null || profile === void 0 ? void 0 : profile.status;
        profile.photoUrl = photoUrl ? photoUrl : profile === null || profile === void 0 ? void 0 : profile.photoUrl;
        profile.slug = slug ? slug : profile === null || profile === void 0 ? void 0 : profile.slug;
        await profileRepository_1.profileRepository.save(profile);
        res.json(profile);
    }
}
exports.ProfileController = ProfileController;
