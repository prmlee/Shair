import { Response } from "express";
import httpStatus from "http-status";
import { Body, Controller, Delete, Get, Param, Post, QueryParams, Req, Res } from "routing-controllers";
import { CarService } from "../services/car.service";
import { Car } from "../database/entities/car.entity";
import { PageQuery } from "../models/PageQuery";

@Controller('/cars')
export class CarController
{ 
  @Get('/')
  async getAll(@QueryParams() query: PageQuery, @Res() response: Response) { 
    
    
  }

  @Get('/:id')
  async getCar(@Param('id') id: string, @Res() response: Response) { 
    try {
      const car: Car = await CarService.findById(id);
      return response.status(httpStatus.OK).send({ data: car });
    } catch (error) {
      return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }

  @Post('/')
  saveCar(@Req() request: Request, @Res() response: Response) { 
    try {
      console.log(request.body);
    } catch (error) {
      
    }
  }

  @Delete('/:id')
  deleteCar(@Param('id') id: string, @Res() response: Response) { 
    
  }
}