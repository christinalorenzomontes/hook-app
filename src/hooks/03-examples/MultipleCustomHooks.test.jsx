import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks"
import { useCounter, useFetch } from "../../hooks";

jest.mock('../../hooks');

describe('Pruebas en <MultipleCustomHooks />', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({ 
    counter: 1,
    increment: mockIncrement
  });

  beforeEach( () => {
    jest.clearAllMocks();
  });
  
  test('Debe mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({ 
      data: null,
      hasError: null,
      isLoading: true
    });

    render( <MultipleCustomHooks /> );
    
    expect( screen.getByText('Loading...') );
    expect( screen.getByText('BreakingBad Quotes') );

    const nextBtn = screen.getByRole('button', { name: 'Next quote' });
    expect(nextBtn.disabled).toBeFalsy();
    
    // screen.debug();
  });

  test('Debe mostrar una cita', () => {

    useFetch.mockReturnValue({ 
      data: [{ author: 'Christina', quote: 'Hi' }],
      hasError: null,
      isLoading: false
    });

    render( <MultipleCustomHooks /> );
    expect( screen.getByText('Hi') ).toBeTruthy();
    expect( screen.getByText('Christina') ).toBeTruthy();

    const nextBtn = screen.getByRole('button', { name: 'Next quote' });
    expect(nextBtn.disabled).toBeFalsy();
  });

  test('Debe llamar a la función Increment()', () => {
    
    useFetch.mockReturnValue({ 
      data: [{ author: 'Christina', quote: 'Hi' }],
      hasError: null,
      isLoading: false
    });

    render( <MultipleCustomHooks /> );
    const nextBtn = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click( nextBtn );

    expect(mockIncrement).toHaveBeenCalled();
    
  });
  
})