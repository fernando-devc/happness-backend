import { Column, Entity,  OneToMany,  PrimaryGeneratedColumn } from 'typeorm'
import { Votacao } from './Votacao'
import { Vote } from './Vote'

@Entity('characters')
export class Character {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text', nullable:true })
	name: string

	@Column({ type: 'text', nullable:false })
	character: string

	@Column({ type: 'text', nullable:false })
	photo_url: string

	@OneToMany(() => Vote, (vote) => vote.character)
    vote: Vote[]

	@OneToMany(()=>Votacao,(votacao)=> votacao.id)
	votacao:Votacao[]


}
