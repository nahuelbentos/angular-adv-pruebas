import { Jugador } from './clase';

describe('Pruebas de clase', () => {
  let jugador = new Jugador();

  // beforeAll(); // Se Ejecuta una unica vez antes que todas
  // beforeEach(); // Se ejecuta cada vez que empieza una prueba una prueba

  // afterAll(); // Se Ejecuta una unica vez despues que todas
  // afterEach(); // Se ejecuta cada vez que termina una prueba
  beforeAll(() => {
    // console.log('beforeAll');
  });
  beforeEach(() => {
    // console.log('beforeEach');
    jugador = new Jugador();
  });
  afterAll(() => {
    // console.log('afterAll');
  });
  afterEach(() => {
    // console.log('afterEach');
  });

  it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);
  });

  it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);
  });

  it('Debe retornar 0 de hp, si recibe más de 100 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(101);

    expect(resp).toBe(0);
  });
});
