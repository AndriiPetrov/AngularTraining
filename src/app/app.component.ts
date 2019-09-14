import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 7 Project!';

  todaydate = new Date();

  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  isavailable = true;
  myClickFunction(event) {
    this.isavailable = !this.isavailable;
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
  }
}
