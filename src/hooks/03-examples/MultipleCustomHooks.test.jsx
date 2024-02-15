import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks"

describe('Pruebas en <MultipleCustomHooks />', () => {
  
  test('Debe mostrar el componente por defecto', () => {

    render( <MultipleCustomHooks /> )
    
    expect( screen.getByText('Loading...') );
    expect( screen.getByText('BreakingBad Quotes') );

    const nextBtn = screen.getByRole('button', { name: 'Next quote' });
    expect(nextBtn.disabled).toBeFalsy();
    
    // screen.debug();
   
  });
  
})