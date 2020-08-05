import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1,2,3,4,5,6,8,9];
  evenNumbers = [2,6,8,10];
  oddNumbers = [1,3,5,9];
  onlyOdd = false;
  value = 5;

}
