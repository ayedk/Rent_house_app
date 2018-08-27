import { Component, OnInit } from '@angular/core';
import { House } from '../house.model';
import { HousesService } from '../houses.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses:House[];
  constructor(private housesService:HousesService) { }

  ngOnInit() {
    this.houses = this.housesService.getHouses();
  }

}
