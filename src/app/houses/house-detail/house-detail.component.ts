import { Component, OnInit } from '@angular/core';
import { House } from '../house.model';
import { HousesService } from '../houses.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House;


  constructor(private housesService:HousesService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.house = this.housesService.getHouseId(id);
  }

}
