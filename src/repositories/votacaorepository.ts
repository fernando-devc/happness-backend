import { AppDataSource } from '../data-source'
import { Votacao } from '../entities/Votacao'



export const votacaorepo = AppDataSource.getRepository(Votacao)
