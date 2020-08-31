import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
  let component: FormularioRegister;

  beforeEach(() => {
    component = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con dos campos, email y password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {
    const control = component.form.get('email');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('El email debe ser un correo valido', () => {
    const control = component.form.get('email');

    control.setValue('nahuel@gmail.com');

    expect(control.valid).toBeTruthy();
  });
});
