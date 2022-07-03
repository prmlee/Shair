import { Response } from "express";
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
  QueryParams,
  Res,
} from "routing-controllers";
import { CarService } from "../services/car.service";
import { Car } from "../database/entities/car.entity";
import { CarFilterParam } from "../dtos/filterparam.dto";
import { CarInsertParam } from "../dtos/insertparam.dto";
import { CarUpdateParam } from "../dtos/updateparam.dto";

@JsonController("/cars")
export class CarController {
  @Get("/")
  async search(@QueryParams() filterParam: CarFilterParam) {
    try {
      const data = await CarService.find(filterParam);
      return { data };
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }

  @Get("/:id")
  async getCar(@Param("id") id: string) {
    try {
      const car: Car = await CarService.findById(id);
      if (!car) {
        return { error: "Car Doesn't Exist" };
      }
      return { data: car };
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }

  @Put("/")
  async insertCar(@Body() carReq: CarInsertParam) {
    try {
      const car: Car = new Car();
      car.vin = carReq.vin;
      car.licensePlate = carReq.licensePlate;
      car.regi = carReq.regi;
      car.regiState = carReq.regiState;
      car.regiExp = carReq.regiExp;
      car.regiName = carReq.regiName;
      car.carValue = carReq.carValue;
      car.currentMileage = carReq.currentMileage || 0;
      car.description = carReq.description || "";
      car.color = carReq.color || "#000000";

      const insertedCar: Car = await CarService.save(car);
      return { data: insertedCar };
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }

  @Post("/")
  async updateCar(@Body() carReq: CarUpdateParam) {
    try {
      const car: Car = await CarService.findById(carReq.id);
      if (!car) {
        return { error: "Car Doesn't Exist" };
      }
      car.licensePlate = carReq.licensePlate;
      car.regi = carReq.regi;
      car.regiState = carReq.regiState;
      car.regiExp = carReq.regiExp;
      car.regiName = carReq.regiName;
      car.carValue = carReq.carValue;
      car.currentMileage = carReq.currentMileage;
      car.description = carReq.description;
      car.color = carReq.color;

      const updatedCar: Car = await CarService.save(car);
      return { data: updatedCar };
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }

  @Delete("/:id")
  async deleteCar(@Param("id") id: string, @Res() response: Response) {
    try {
      const car: Car = await CarService.findById(id);
      if (!car) {
        return { error: "Car Doesn't Exist" };
      }
      await CarService.remove(car);
      return { data: "Removed Car" };
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }
}
