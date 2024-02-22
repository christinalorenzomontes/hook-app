import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => {
  
  test('Debe mostras el HomePage', () => {

    render( 
      <MemoryRouter>
        <MainApp /> 
      </MemoryRouter>
    );

    //screen.debug();

    expect( screen.getByText('HomePage') ).toBeTruthy();

  });

  test('Debe mostras el LoginPage', () => {

    render( 
      <MemoryRouter initialEntries={['/login']}>
        <MainApp /> 
      </MemoryRouter>
    );

    //screen.debug();

    expect( screen.getByText('LoginPage') ).toBeTruthy();

  });
  
})