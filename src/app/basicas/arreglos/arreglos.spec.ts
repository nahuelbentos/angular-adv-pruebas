import { obtenerRobots } from './arreglos';
describe('pruebas de arreglos', () => {
  it('Debe retornar al menos 3 robots', () => {
    const res = obtenerRobots();

    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir robot1 y robot2', () => {
    const res = obtenerRobots();

    expect(res).toContain('robot1');
    expect(res).toContain('robot3');
  });
});
