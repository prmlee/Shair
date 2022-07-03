import { IsAlpha, IsDate, IsNumber, IsPositive } from "class-validator";
import { PageQuery } from "./pagequery.dto";

export class CarFilterParam extends PageQuery { 
  @IsAlpha()
  vin: string;

  @IsAlpha()
  licensePlate: string;

  @IsAlpha()
  regi: string;

  @IsAlpha()
  regiState: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsPositive()
  startValue: number;

  @IsPositive()
  endValue: number;

  @IsNumber()
  startMileage: number;

  @IsNumber()
  endMileage: number;

  @IsAlpha()
  keyword: number;
}