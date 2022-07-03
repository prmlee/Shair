import { CarFilterParam } from "../dtos/filterparam.dto";
import { AppDataSource } from "../database/data-source";
import { Car } from "../database/entities/car.entity";
import { ILike, LessThanOrEqual, MoreThanOrEqual, SelectQueryBuilder } from "typeorm";

const find = async (filterParam: CarFilterParam): Promise<[Car[], number]> => {
  const query:SelectQueryBuilder<Car> = AppDataSource.getRepository(Car).createQueryBuilder('car');
  
  if (filterParam.vin) { 
    const cars: Car[] = await query.where({ vin: filterParam.vin }).getMany();
    return [cars, 1];
  }
  if (filterParam.licensePlate) { 
    const cars: Car[] = await query.where({ licensePlate: filterParam.licensePlate }).getMany();
    return [cars, 1];
  }
  
  if (filterParam.regi) { 
    query.andWhere({ regi: filterParam.regi });
  }
  if (filterParam.regiState) { 
    query.andWhere({ regiState: filterParam.regiState });
  }
  if (filterParam.startDate) {
    query.andWhere({ regiExp: MoreThanOrEqual(filterParam.startDate) });
  }
  if (filterParam.endDate) { 
    query.andWhere({ regiExp: LessThanOrEqual(filterParam.endDate) });
  }
  if (filterParam.startMileage) { 
    query.andWhere({ currentMileage: MoreThanOrEqual(filterParam.startMileage) });
  }
  if (filterParam.endMileage) { 
    query.andWhere({ currentMileage: LessThanOrEqual(filterParam.endMileage) });
  }
  if (filterParam.keyword) { 
    query.andWhere({ description: ILike(`%${ filterParam.keyword }%`) });
  }

  const carsAndTotal = query.skip(filterParam.page * filterParam.size).take(filterParam.size).getManyAndCount();
  return carsAndTotal;
}

const findById = async (id:string): Promise<Car> => {
  const car: Car = await AppDataSource.getRepository(Car).findOne({
    where: { id }
  });
  return car;
}

const save = async (car: Car): Promise<Car> => {
  const savedCar: Car = await AppDataSource.manager.save(car);
  return savedCar;
}

const remove = async (car: Car): Promise<void> => { 
  await AppDataSource.getRepository(Car).remove(car);
}

export const CarService = { find, findById, save, remove };