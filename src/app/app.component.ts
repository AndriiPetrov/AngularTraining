import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoApp';

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  isavailable = true;
  myClickFunction(event) {
    this.isavailable = !this.isavailable;
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
  }
}
