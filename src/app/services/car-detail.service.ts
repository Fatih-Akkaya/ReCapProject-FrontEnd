import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="http://localhost:58316/api/";
  constructor(private httpClient:HttpClient) { }
  getCar(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbyid?id="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getimagesbycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
