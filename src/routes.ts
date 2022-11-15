import { Router } from 'express'
import { CharacterController } from './controllers/CharacterController'
import { ProfileController } from './controllers/ProfileController'
import { QuestionController } from './controllers/QuestionController'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'
import { upload_character } from './multers/imgchar'
import express from 'express'
import { VotacaoController } from './controllers/VotacaoController'
import { VoteController } from './controllers/voteController'
const routes = Router()

// routes.post('/create_user', new UserController().create)
// routes.post('/login', new UserController().login)
routes.post('/question',new QuestionController().create)
routes.get('/question',new QuestionController().getAll)
routes.get('/question/:id',new QuestionController().getOne)
routes.delete('/question/:id',new QuestionController().delete)
routes.use('/files', express.static('uploads'))
routes.post('/character',upload_character.single("file"),new CharacterController().create)
routes.get('/character',new CharacterController().getAll)
routes.get('/character/:id',new CharacterController().getOne)
routes.put('/character/:id',new CharacterController().update)
routes.delete('/character/:id',new CharacterController().delete)

routes.post('/votar', new VoteController().create)
routes.post('/votacao', new VotacaoController().create)
routes.get('/votacao', new VotacaoController().getAll)
routes.get('/votacao/:id', new VotacaoController().getOne)
routes.put('/votacao/:id', new VotacaoController().update)
routes.delete('/votacao/:id', new VotacaoController().delete)

// routes.use(authMiddleware)
// //profile
// routes.post('/profile', new ProfileController().create)
// routes.get('/profile', new ProfileController().getProfile)
// routes.put('/profile', new ProfileController().profileUpdate)

export default routes
