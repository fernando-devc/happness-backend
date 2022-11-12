import { AppDataSource } from '../data-source'
import { Question } from '../entities/Question'


export const questionrepo = AppDataSource.getRepository(Question)
