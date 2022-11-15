import { AppDataSource } from '../data-source'
import { Vote } from '../entities/Vote'



export const voterepo = AppDataSource.getRepository(Vote)
