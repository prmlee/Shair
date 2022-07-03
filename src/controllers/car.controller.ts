import { Response } from "express";
import { Body, Delete, Get, JsonController, Param, Post, QueryParams, Res } from "routing-controllers";
import { CarService } from "../services/car.service";
import { Car } from "../database/entities/car.entity";
import { PageQuery } from "../dtos/pagequery.dto";
import { CarFilterParam } from "../dtos/filterparam.dto";

@JsonController('/cars')
export class CarController
{ 
  @Get('/')
  async getAll(@QueryParams() query: PageQuery) { 
    const filterParam: CarFilterParam = new CarFilterParam();
    filterParam.page = query.page - 1;
    filterParam.size = query.size;
    try {
      const data = await CarService.find(filterParam);
      return {data};
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }

  @Get('/:id')
  async getCar(@Param('id') id: string) { 
    try {
      const car: Car = await CarService.findById(id);
      if (!car) {
        return { error: "Car Doesn't Exist" };
      }
      return {data: car};
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }

  @Post('/')
  async saveCar(@Body() car: Car) { 
    try {
      const savedCar: Car = await CarService.save(car);
      return {data: savedCar};
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }

  @Delete('/:id')
  async deleteCar(@Param('id') id: string, @Res() response: Response) { 
    try {
      const car: Car = await CarService.findById(id);
      if (!car) {
        return { error: "Car Doesn't Exist" };
      }
      await CarService.remove(car);
      return { data: `Removed Car - ${ id }` };
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  }
}