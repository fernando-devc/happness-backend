import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm'

@Entity('questions')
export class Question {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text', nullable:true })
	nome: string

	@Column({ type: 'text', nullable: true })
	question: string

	@Column({ type: 'bool', nullable: true })
	selected: Boolean

}
