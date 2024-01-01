import { Policy } from "./Policy";
import { User } from "./User";

export interface UserPolicy
{
    policyNo:number;
	startDate:any;
	policyName:string;
	policyType:string;
	company:string;
	endDate:any;
	termPeriod:string;
	amount:number;
	interest:any;
    user:User;
	policy:Policy;
}