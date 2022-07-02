import { AppDataSource } from "../database/data-source";
import { Car } from "../database/entities/car.entity";


const findById = async (id:string): Promise<Car> => {
  const car: Car = await AppDataSource.getRepository(Car).findOne({
    where: { id }
  });
  return car;
}

const save =async (car: Car): Promise<Car> => {
  const savedCar: Car = await AppDataSource.getRepository(Car).save(car);
  return savedCar;
}

export const CarService = { findById, save };