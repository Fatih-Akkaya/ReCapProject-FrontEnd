import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;
  carImages:CarImage[]=[];
  dataLoaded = false;
  filterText = '';

  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCar(params['carId']);
      } else {
        this.router.navigate(['/cars']);
      }
    });
  }

  getCar(carId: number) {
    this.carDetailService.getCar(carId).subscribe((response) => {
      this.car = response.data;
      this.getCarImages(carId);
      this.dataLoaded = true;
    });
  }
  getCarImages(carId:number){
    this.carDetailService.getCarImages(carId).subscribe((response) => {
      this.carImages=response.data;
      console.log(this.carImages);
    });
  }
}
