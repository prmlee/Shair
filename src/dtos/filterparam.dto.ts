import { IsAlpha, IsDate, IsNumber, IsOptional, IsPositive } from "class-validator";
import { PageQuery } from "./pagequery.dto";

export class CarFilterParam extends PageQuery {
  @IsAlpha()
  @IsOptional()
  vin: string;

  @IsAlpha()
  @IsOptional()
  licensePlate: string;

  @IsAlpha()
  @IsOptional()
  regi: string;

  @IsAlpha()
  @IsOptional()
  regiState: string;

  @IsDate()
  @IsOptional()
  startDate: Date;

  @IsDate()
  @IsOptional()
  endDate: Date;

  @IsPositive()
  @IsOptional()
  startValue: number;

  @IsPositive()
  @IsOptional()
  endValue: number;

  @IsNumber()
  @IsOptional()
  startMileage: number;

  @IsNumber()
  @IsOptional()
  endMileage: number;

  @IsAlpha()
  @IsOptional()
  keyword: string;
}
