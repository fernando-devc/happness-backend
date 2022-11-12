import { Router } from 'express'
import { ProfileController } from './controllers/ProfileController'
import { QuestionController } from './controllers/QuestionController'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/create_user', new UserController().create)
routes.post('/login', new UserController().login)
routes.post('/question',new QuestionController().create)
routes.get('/question',new QuestionController().getAll)
routes.get('/question/:id',new QuestionController().getOne)

routes.use(authMiddleware)
//profile
routes.post('/profile', new ProfileController().create)
routes.get('/profile', new ProfileController().getProfile)
routes.put('/profile', new ProfileController().profileUpdate)

export default routes
