import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Incidents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({type: "text"})
  description: string;

  @Column()
  requesterDetails: string;

  @Column()
  status: string;

  @Column({type: "tinyint", default: false})
  deleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
