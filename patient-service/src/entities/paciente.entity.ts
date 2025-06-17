import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn()
  id_paciente: number;

  @Column({ length: 100 })
  direccion: string;

  @Column({ length: 12 })
  rut: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50 })
  apellido_paterno: string;

  @Column({ length: 50 })
  apellido_materno: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ length: 1 })
  genero: string;

  @Column({ length: 15 })
  telefono: string;
}
