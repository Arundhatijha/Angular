import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  genders = ['male', 'female'];
  userData = {
    username: '',
    mobile:'',
    email: '',
    country: '',
    gender: '',
    check:''
  };
  submitted = false;
 
  
onSubmit(form,formData) {
    console.log('submitted formdata',formData);  
 
    form.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
