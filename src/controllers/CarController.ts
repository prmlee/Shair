import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";

@Controller()
export class CarController
{ 
  @Get('/cars')
  getAll(@Req() request: Request, @Res() response: Response)
  { 
    
  }
}