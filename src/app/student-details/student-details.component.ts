import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
name='test';
flag=true;
email='test@test.com';
Fathername='test';
Mothername='test1';
phone='47473436579';

  constructor() { }

  ngOnInit() {
  }

}
