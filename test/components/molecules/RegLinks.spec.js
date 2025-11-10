//RENDERIZADO CONDICIONAL 

import React from 'react';
import { render, screen } from '@testing-library/react';
// Necesitamos MemoryRouter porque RegLinks usa <TextLink>, que usa <Link>
import { MemoryRouter } from 'react-router-dom';
// Importamos el CONTEXTO para poder "falsear" su valor
import { AuthContext } from '../../../src/context/AuthContext';
// Importamos el componente que vamos a probar
import RegLinks from '../../../src/components/molecules/RegLinks';

describe('Componente RegLinks (Renderizado Condicional)', () => {

  //El caso "sin usuario" (log-out)
  it('debería mostrar "Iniciar sesión" y "Registrar" si el usuario es null', () => {
    
    // Aquí está el truco:
    // Renderizamos el componente envolviéndolo en un AuthContext.Provider
    // y le pasamos un valor "falso" (mock) donde 'user' es 'null'.
    render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter>
          <RegLinks />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Verificamos que los enlaces de login/registro SÍ existen
    expect(screen.getByText(/Iniciar sesión/i)).toBeTruthy();
    expect(screen.getByText(/Registrar usuario/i)).toBeTruthy();

    // Verificamos que el saludo de bienvenida NO existe
    expect(screen.queryByText(/Bienvenido/i)).toBeNull();
  });

  //El caso "con usuario" (log-in)
  it('debería mostrar "Bienvenido" y "Cerrar Sesión" si hay un usuario', () => {
    
    // Creamos un usuario falso
    const mockUser = { nombre: 'UsuarioTest' };

    // Esta vez, pasamos el usuario falso en el valor del Provider.
    // También pasamos una función 'logout' vacía, porque el componente la necesita.
    render(
      <AuthContext.Provider value={{ user: mockUser, logout: () => {} }}>
        <MemoryRouter>
          <RegLinks />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Verificamos que el saludo SÍ existe
    expect(screen.getByText((content, element) => {
  // Condición 1: El texto debe coincidir
  const hasText = /Bienvenido,\s+UsuarioTest/i.test(element.textContent);
  // Condición 2: La etiqueta debe ser un SPAN
  const isSpan = element.tagName.toLowerCase() === 'span';
  // Solo devuelve 'true' si ambas se cumplen
  return hasText && isSpan;
})).toBeTruthy();
    expect(screen.getByRole('button', { name: /Cerrar Sesión/i })).toBeTruthy();

    // Verificamos que el enlace de login NO existe
    expect(screen.queryByText(/Iniciar sesión/i)).toBeNull();
  });

});
