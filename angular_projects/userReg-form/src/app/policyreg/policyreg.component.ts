import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserPolicy } from '../model/userpolicy';


@Component({
  selector: 'app-policyreg',
  templateUrl: './policyreg.component.html',
  styleUrls: ['./policyreg.component.css']
})
export class PolicyregComponent {


  tenureControl=new FormControl('',Validators.required);

  response:any;

userPolicy:UserPolicy={
  startdate: '',
  policyname: ' ',
  policytype: ' ',
  company: ' ',
  enddate: '',
  payemntinterval: '',
  tenure: '',
  maturityamount: '',
  interest: '',
  amount: '',
  policyno: 0
}

readPolRegFormData(PolRegFormData:any){
this.userPolicy.startdate=PolRegFormData.form.value.startdate;
this.userPolicy.policyname=PolRegFormData.form.value.policyname;
this.userPolicy.policytype=PolRegFormData.form.value.policytype;
this.userPolicy.company=PolRegFormData.form.value.company;
this.userPolicy.enddate=PolRegFormData.form.value.enddate;
this.userPolicy.payemntinterval=PolRegFormData.form.value.payemntinterval;
this.userPolicy.tenure=PolRegFormData.form.value.tenure;
this.userPolicy.maturityamount=PolRegFormData.form.value.maturityamount;
this.userPolicy.interest=PolRegFormData.form.value.interest;
this.userPolicy.amount=PolRegFormData.form.value.amount;
this.userPolicy.policyno=PolRegFormData.form.value.policyno;
console.log(this.userPolicy);

let response = this.jwtService.registerUser(this.userPolicy);
response.subscribe( responseData => {this.response = responseData; console.log(responseData) });

}
}
