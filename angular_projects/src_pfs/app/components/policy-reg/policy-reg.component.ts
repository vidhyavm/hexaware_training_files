import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Policy} from 'src/app/model/Policy'
import { PolicyServicesService } from 'src/app/services/policy-services.service';


@Component({
  selector: 'app-policy-reg',
  templateUrl: './policy-reg.component.html',
  styleUrls: ['./policy-reg.component.css']
})
export class PolicyRegComponent {

  response:any;

  policy:Policy =
  {
    policyId:0,
    policyName:'',
    policyType:'',
    company:'',
    policyDescription:'',
    termPeriod:'',
    amount:0,
    interest:0

  }
  constructor(private policyService:PolicyServicesService){}


  policyTypeControl = new FormControl('',Validators.required);
  termPeriodControl = new FormControl('',Validators.required);


  readPolicyRegFormData(formData:any){

    this.policy.policyName = formData.form.value.policyName;
    this.policy.policyType = this.policyTypeControl.value;
    this.policy.termPeriod = this.termPeriodControl.value;
    this.policy.company = formData.form.value.company;
    this.policy.policyDescription = formData.form.value.description;
    this.policy.amount = formData.form.value.amount;
    this.policy.interest = formData.form.value.interest;
    console.log(this.policy);


    let response = this.policyService.registerPolicy(this.policy);
    console.log(response);
    response.subscribe( responseData => {this.response = responseData; console.log(responseData) });
  }

}
