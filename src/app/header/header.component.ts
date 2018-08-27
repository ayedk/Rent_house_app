import { Component, ElementRef, OnInit, HostListener, ViewChild  } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {MenuItem} from 'primeng/api';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  items: MenuItem[];
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  ngOnInit() {
    this.items = [
      {
        label: 'TV', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              label: 'TV 1',
              items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
            },
            {
              label: 'TV 2',
              items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
            }
          ],
          [
            {
              label: 'TV 3',
              items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
            },
            {
              label: 'TV 4',
              items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
            }    
          ]
        ]
      },
      {
        label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
            },
            {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
            },
          ],
          [
            {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
            }
          ]
        ]
      }
    ];
  }  

onLogout() {
  this.authService.logout();
}

ngAfterViewInit(){
  this.elementPosition = this.menuElement.nativeElement.offsetTop;
}

@HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}