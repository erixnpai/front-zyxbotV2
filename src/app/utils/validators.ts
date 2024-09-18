import { FormGroup } from "@angular/forms";

export const isRequired = (field: 'email' | 'password' , form: FormGroup) => {
  const control = form.get(field);

  return control && control.hasError('required') && control.touched;
}

export const hasEmailError = (form: FormGroup) => {
    const control = form.get('email');
    return control && control?.touched && control.hasError('email') 
  }