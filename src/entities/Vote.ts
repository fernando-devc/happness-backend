import { Column, Entity,  JoinColumn,  ManyToOne,  PrimaryGeneratedColumn } from 'typeorm'
import { Character } from './Character'
import { Votacao } from './Votacao'

@Entity('votes')
export class Vote {
	@PrimaryGeneratedColumn()
	id: number


    @ManyToOne(() => Character, (char) => char.vote)
    @JoinColumn()
    character: Character

    @ManyToOne(() => Votacao, (votacao) => votacao.vote)
    @JoinColumn()
    votacao: Votacao
}
