import React from "react";
import { render, screen } from "@testing-library/react";
// Importamos MemoryRouter para simular el navegador en las pruebas
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";

describe("Componente App", () => {
  it('debería renderizar correctamente y mostrar "Learn React"', () => {
    // Envolvemos <App /> dentro de <MemoryRouter>
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    // Verificamos que el texto esté ahí
    expect(screen.getByText(/learn react/i)).toBeTruthy();
  });
});