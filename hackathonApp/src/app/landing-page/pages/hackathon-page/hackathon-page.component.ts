import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hackathon-page',
  templateUrl: './hackathon-page.component.html',
  styleUrls: ['./hackathon-page.component.scss']
})
export class HackathonPageComponent {

  public email : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  registerForm  : FormGroup = this.formBuilder.group({
    fullName    : ['',[Validators.required]],
    email       : ['',[Validators.required, Validators.pattern(this.email)]],
    profile     : ['',[Validators.required]],
    city        : ['',[Validators.required]],
    country     : ['',[Validators.required]],
  });

  get emailTextValidator() : string{
    const email = this.registerForm.get('email')?.errors;

    if (email?.['required']){
      return 'Este Campo No Debe Estar Vacío ';
    }

    if(email?.['pattern']){
      return 'No parece un correo Valido';
    }

    return '';
  }

  isValidData(formData : string): boolean{
    return this.registerForm.controls[formData]?.invalid &&
            this.registerForm.controls[formData]?.touched
  }

  submitFormMessage(): void{
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }else{
      window.location.href=`mailto:taxisLibresExample@hotmail.com?subjectRegistroDeUsuario&body=
      %0ANombre%3A ${this.registerForm.controls['fullName'].value}
      %0ACorreo%3A ${this.registerForm.controls['email'].value}
      %0APerfil Ocupacional%3A ${this.registerForm.controls['profile'].value}
      %0ACiudad%3A ${this.registerForm.controls['city'].value}
      %0APaís%3A ${this.registerForm.controls['country'].value}`;
      this.registerForm.reset('');
    }
  }

  constructor(private formBuilder : FormBuilder,){}
}
