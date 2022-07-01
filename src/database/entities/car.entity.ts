import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars')
export class Car
{ 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'vin', unique: true, length: 17 })
  vin: string;

  @Column({ name: 'license_plate', unique: true, length: 15 })
  licensePlate: string;

  @Column({ name: 'regi' })
  regi: string;

  @Column({ name: 'regi_state', length: 5 })
  regiState: string;

  @Column('timestamp', { name: 'regi_expiration' })
  regiExp: Date;

  @Column({ name: 'regi_name', length: 30 })
  regiName: string;

  @Column({ name: 'car_value', type: 'integer' })
  carValue: number;

  @Column({ name: 'current_mileage', type: 'integer' })
  currentMileage: number;

  @Column({ name: 'description', type: 'text' })
  description: string;
  
  @Column({ name: 'color', length: 7, default: '#000000' })
  color: string;
}