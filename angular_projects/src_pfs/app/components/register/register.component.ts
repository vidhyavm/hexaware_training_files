import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  employerTypeControl = new FormControl('',Validators.required);
  userTypeControl = new FormControl('',Validators.required);
  userCategoryControl = new FormControl('',Validators.required);

  response:any;

  user: User = { 
    userId:0,
    fname: '', 
    lname: '', 
    address:
    {
      addressId:'',
      addressLine: '',
      city: '',
      state: '',
      pincode: ''
    },
    password: '',
    email: '',
    mobNo: '',
    userType: '',
    employerType: '',
    employerName: '',
    userCategory: '',
    dob: '',
    panNumber: ''
  }


  constructor(private userService:UserService){}


  readRegFormData(RegFormData:any)
   {
      this.user.fname = RegFormData.form.value.firstname;
      this.user.lname = RegFormData.form.value.lastname;
      this.user.dob = RegFormData.form.value.dob;
      this.user.email = RegFormData.form.value.email;
      this.user.password = RegFormData.form.value.password;
      this.user.mobNo = RegFormData.form.value.mobile;
      this.user.employerName = RegFormData.form.value.employername;
      this.user.employerType = this.employerTypeControl.value;
      this.user.panNumber= RegFormData.form.value.panno;
      this.user.userCategory = this.userCategoryControl.value;
      this.user.userType = this.userTypeControl.value;
      this.user.address.addressLine = RegFormData.form.value.addressline;
      this.user.address.city = RegFormData.form.value.city;
      this.user.address.state = RegFormData.form.value.state;
      this.user.address.pincode = RegFormData.form.value.pincode;
      console.log(this.user);

      
      let response = this.userService.registerUser(this.user);
      response.subscribe( responseData => {this.response = responseData; console.log(responseData) });
     }

     isAdminLoggedIn()
     {
      if(localStorage.getItem('userType')==='Admin')
      {
        return true;
      }
      else{
        return false;
      }
     }
    }
