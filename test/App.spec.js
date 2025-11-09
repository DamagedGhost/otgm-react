import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// Importa tu AuthProvider
import { AuthProvider } from "../src/context/AuthContext";
import App from "../src/App";

describe("Componente App", () => {
  it('debería renderizar correctamente y mostrar "Learn React"', () => {
    // Prueba de Renderizado 
    render(
      <MemoryRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/learn react/i)).toBeTruthy();
  });
});