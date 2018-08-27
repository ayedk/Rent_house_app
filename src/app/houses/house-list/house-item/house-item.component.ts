import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { House } from '../../house.model';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
  @Input() house: House;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  onSelect(house:House){
    this.router.navigate(['/houses',house.id]);
  }
}
