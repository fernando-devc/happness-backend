import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text', nullable: true })
    slug: string

    @Column({ type: 'text', nullable: true })
    photoUrl: string

    @Column({ type: 'text', nullable: true })
    status: string

    @Column({ type: 'text', nullable: true })
    description: string

    @OneToOne(() => User, user => user.profile, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User
}
