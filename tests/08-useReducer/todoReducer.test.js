import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {
  
  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false
  }];

  test('Debe regresar el estado inicial', () => {
    
    const newState = todoReducer( initialState, {} );
    expect( newState ).toBe( initialState );

  });  

  test('Debe agregar un todo', () => {
    
    const action = {
      type: '[TODO]: Add Todo',
      payload: {
        id: 2,
        description: 'Demo Todo',
        done: false
      }
    }

    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe( 2 );
    expect( newState ).toContain( action.payload );
  
  });

  test('Debe eliminar un todo', () => {
  
    const action = {
      type: '[TODO]: Remove Todo',
      payload: 1
    };

    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe( 0 );

  });

  test('Debe realizar el toggle del todo', () => {
  
    const action = {
      type: '[TODO]: Toggle Todo',
      payload: 1
    };

    const newState = todoReducer( initialState, action );
    expect( newState[0].done ).toBe( true );

    
    const newState2 = todoReducer( newState, action );
    expect( newState2[0].done ).toBe( false );
  
  });
  
});