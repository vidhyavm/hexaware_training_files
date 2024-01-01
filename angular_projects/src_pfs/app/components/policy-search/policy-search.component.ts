import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Policy } from 'src/app/model/Policy';
import { PolicyServicesService } from 'src/app/services/policy-services.service';

@Component({
  selector: 'app-policy-search',
  templateUrl: './policy-search.component.html',
  styleUrls: ['./policy-search.component.css']
})
export class PolicySearchComponent implements OnInit
{
  response:any;
  policyDetails:any;
  constructor(private policyService:PolicyServicesService){}
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
  policyTypeControl = new FormControl('',Validators.required);
  termPeriodControl = new FormControl('',Validators.required);



  ngOnInit(): void 
  {
    this.policyService.getAllPolicies().subscribe
    (
      (response)=>
      {
        console.log(response);
        this.policyDetails=response;
      },
      (error)=>
      {
        console.log(error);
      }
    )

  }
  isAdminLoggedIn()
  {
    let token=localStorage.getItem('token');
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else if(localStorage.getItem('userType')==='Admin')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  isUserLoggedIn()
  {
    let token=localStorage.getItem('token');
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else if(localStorage.getItem('userType')==='User')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  deletePolicy(policyId:any)
  {
    this.policyService.deletePolicy(policyId).subscribe
    (
      (response)=>
    {
      console.log(response);
    },
    (error)=>
    {
      console.log(error);
    }
    )
  }

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

  updateFormData(formData:any)
  {
    this.policy.policyId = formData.form.value.policyId;
    this.policy.policyName = formData.form.value.policyName;
    this.policy.policyType = this.policyTypeControl.value;
    this.policy.termPeriod = this.termPeriodControl.value;
    this.policy.company = formData.form.value.company;
    this.policy.policyDescription = formData.form.value.description;
    this.policy.amount = formData.form.value.amount;
    this.policy.interest = formData.form.value.interest;
    console.log(this.policy);
    


    let response = this.policyService.updatePolicy(this.policy);
    console.log(response);
    response.subscribe( responseData => {this.response = responseData; console.log(responseData) });
    window.location.reload();

  }
  getPoliciesByType(policyType:any)
  {
    if(policyType.target.value==='Get All')
    {
      this.policyService.getAllPolicies().subscribe
    (
      (response)=>
      {
        console.log(response);
        this.policyDetails=response;
      },
      (error)=>
      {
        console.log(error);
      }
    )

    }

    this.policyService.getPoliciesByType(policyType.target.value).subscribe
    (
      (response)=>
      {
        console.log(response);
        this.policyDetails=response;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

}
