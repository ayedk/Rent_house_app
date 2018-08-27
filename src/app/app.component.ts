import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDskrH7QyPpswGAQfGR1VnmsR4036dEsZI",
      authDomain: "test-app-1ee9b.firebaseapp.com",
    });
  }
}
