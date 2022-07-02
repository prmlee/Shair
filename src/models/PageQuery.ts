import { IsPositive } from "class-validator";

export class PageQuery { 
  @IsPositive()
  page: number;

  @IsPositive()
  count: number;
}