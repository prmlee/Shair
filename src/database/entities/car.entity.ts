import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars')
export class Car
{ 
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'vin', unique: true, length: 17 })
  public vin: string;

  @Column({ name: 'license_plate', unique: true, length: 15 })
  public licensePlate: string;

  @Column({ name: 'regi' })
  public regi: string;

  @Column({ name: 'regi_state', length: 5 })
  public regiState: string;

  @Column('timestamp', { name: 'regi_expiration' })
  public regiExp: Date;

  @Column({ name: 'regi_name', length: 30 })
  public regiName: string;

  @Column({ name: 'car_value', type: 'integer' })
  public carValue: number;

  @Column({ name: 'current_mileage', type: 'integer' })
  public currentMileage: number;

  @Column({ name: 'description', type: 'text' })
  public description: string;
  
  @Column({ name: 'color', length: 7, default: '#000000' })
  public color: string;
}