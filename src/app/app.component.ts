import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 4 Project';
  todaydate;
  componentproperty;
  emailid;
  formdata;
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {"passwd" : true};
    }
  }
  onClickSubmit(data) { this.emailid = data.emailid; }

  // title = "Angular 7 Project!";
  // emailid;
  // formdata;
  // constructor(private myservice: MyserviceService) {}
  // ngOnInit() {
  //   this.formdata = new FormGroup({
  //     emailid: new FormControl("angular@gmail.com"),
  //     passwd: new FormControl("abcd1234")
  //   })
  // }
  // onClickSubmit(data) { this.emailid = data.emailid; }

  // title = 'Angular 7 Project!';
  // constructor(private myservice: MyserviceService) {}
  // ngOnInit() {}
  // onClickSubmit(data) {
  //   console.log(data);
  //   alert("Entered Email id : " + data.emailid);
  // }
  // title = "Angular 7 Project!";
  // public persondata = [];
  // constructor(private myservice: MyserviceService) {}
  // ngOnInit() {
  //   this.myservice.getData().subscribe((data) => {
  //     this.persondata = Array.from(Object.keys(data), k=>data[k]);
  //     console.log(this.persondata);
  //   })
  // }
  // title = 'Angular 7 Project!';
  // todaydate;
  // componentproperty;
  // constructor(private myservice: MyserviceService) {}
  // ngOnInit() {
  //   this.todaydate = this.myservice.showTodayDate();
  //   console.log(this.myservice.serviceproperty);
  //   this.myservice.serviceproperty = "component created";
  //   this.componentproperty = this.myservice.serviceproperty;
  // }

  // todaydate = new Date();

  // jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};

  // months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // isavailable = true;
  // myClickFunction(event) {
  //   this.isavailable = !this.isavailable;
  // }
  // changemonths(event) {
  //   alert("Changed month from the Dropdown");
  // }
}
