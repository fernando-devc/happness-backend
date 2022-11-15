import { AppDataSource } from '../data-source'
import { Character } from '../entities/Character'



export const characterrepo = AppDataSource.getRepository(Character)
