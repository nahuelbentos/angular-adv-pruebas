import { mensaje } from './string';
// describe('Pruebas de Strings');
// it('Debe de regresar un string');
// it('Debe de contener un nombre');

describe('Pruebas de String', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Nahuel');

    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el parametro enviado', () => {
    const nombre = 'Nahuel';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
