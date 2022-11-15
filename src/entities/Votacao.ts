import { Column, Entity,  OneToMany, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Character } from './Character'
import { Vote } from './Vote'

@Entity('votacoes')
export class Votacao {
	@PrimaryGeneratedColumn()
	id: number

    @Column({ type: 'boolean' })
	open: boolean

	@OneToMany(() => Vote, (vote) => vote.votacao)
    vote: Vote[]

    @ManyToOne(() => Character, (char) => char.votacao)
    @JoinColumn()
    character_1: Character

    @ManyToOne(() => Character, (char) => char.votacao)
    @JoinColumn()
    character_2: Character
}
