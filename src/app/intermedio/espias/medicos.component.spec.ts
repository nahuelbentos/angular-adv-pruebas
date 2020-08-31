import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, empty, throwError } from 'rxjs';

// import 'rxjs/add/observable/from';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3 '];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamar al servicio para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return empty();
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe  agregar un nuevo  medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan Perez' };

    const espia = spyOn(servicio, 'agregarMedico').and.returnValue(
      from([medico])
    );

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error de ', () => {
    const error = 'No se pudo agregar el médico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(error));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(error);
  });

  it('Debe llamar al servicio para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No Debe llamar al servicio para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
