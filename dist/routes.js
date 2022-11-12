"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QuestionController_1 = require("./controllers/QuestionController");
const UserController_1 = require("./controllers/UserController");
const routes = (0, express_1.Router)();
routes.post('/create_user', new UserController_1.UserController().create);
routes.post('/login', new UserController_1.UserController().login);
routes.post('/question', new QuestionController_1.QuestionController().create);
routes.get('/question', new QuestionController_1.QuestionController().getAll);
routes.get('/question/:id', new QuestionController_1.QuestionController().getOne);
// routes.use(authMiddleware)
// //profile
// routes.post('/profile', new ProfileController().create)
// routes.get('/profile', new ProfileController().getProfile)
// routes.put('/profile', new ProfileController().profileUpdate)
exports.default = routes;
