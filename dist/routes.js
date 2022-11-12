"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileController_1 = require("./controllers/ProfileController");
const QuestionController_1 = require("./controllers/QuestionController");
const UserController_1 = require("./controllers/UserController");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const routes = (0, express_1.Router)();
routes.post('/create_user', new UserController_1.UserController().create);
routes.post('/login', new UserController_1.UserController().login);
routes.post('/question', new QuestionController_1.QuestionController().create);
routes.get('/question', new QuestionController_1.QuestionController().getAll);
routes.get('/question/:id', new QuestionController_1.QuestionController().getOne);
routes.use(authMiddleware_1.authMiddleware);
//profile
routes.post('/profile', new ProfileController_1.ProfileController().create);
routes.get('/profile', new ProfileController_1.ProfileController().getProfile);
routes.put('/profile', new ProfileController_1.ProfileController().profileUpdate);
exports.default = routes;
