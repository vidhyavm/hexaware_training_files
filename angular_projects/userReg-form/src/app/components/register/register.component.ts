import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title='Registration'

  status=false;


    onSubmit(form: NgForm) {
      if (form.valid) {
        console.log('Form Data:', form.value);

      }
    }

}
