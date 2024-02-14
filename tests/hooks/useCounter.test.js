import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {
  
  test('Debe retornar los valores por defecto', () => {
    
    const { result } = renderHook( () => useCounter() );
    const { counter, decrement, increment, reset } = result.current;

    expect( counter ).toBe(10);
    expect( decrement ).toEqual( expect.any( Function ) );
    expect( increment ).toEqual( expect.any( Function ) );
    expect( reset ).toEqual( expect.any( Function ) );

  });

  test('Debe generar el counter con el valor de 100', () => { 
    
    const { result } = renderHook( () => useCounter(100) );
    const { counter } = result.current;



    expect( counter ).toBe(100);
  });

});