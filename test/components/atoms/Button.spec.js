//RENDERIZADO CONDICIONAL Y TEST DE PROPS (CAMBIO DE LABEL EN BUTTON)

import React from 'react';
import { render, screen } from '@testing-library/react';
// El Button usa <Link>, así que necesitamos MemoryRouter
import { MemoryRouter } from 'react-router-dom';
// Ajusta la ruta para que apunte a tu componente real
import Button from '../../../src/components/atoms/Button';

describe('Componente Button (Prueba de Props)', () => {

  // Prueba 1: Probar la prop "label"
  it('debería mostrar el texto de la prop "label"', () => {
    // Renderizamos el botón pasándole una prop
    render(
      <MemoryRouter>
        <Button label="Click Me" />
      </MemoryRouter>
    );
    
    // Buscamos un elemento con rol "button" Y que tenga el texto "Click Me"
    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonElement).toBeTruthy();
  });

  // Prueba 2: Probar la prop "href" (Renderizado condicional)
  it('debería renderizar un enlace <a> (rol "link") si se pasa la prop "href"', () => {
    // Renderizamos el botón pasándole una prop "href"
    render(
      <MemoryRouter>
        <Button label="Ir a Home" href="/" />
      </MemoryRouter>
    );

    // Verificamos que ahora es un rol "link" (un <Link> de react-router)
    const linkElement = screen.getByRole('link', { name: /Ir a Home/i });
    expect(linkElement).toBeTruthy();

    // Verificamos que NO es un botón
    const buttonElement = screen.queryByRole('button');
    expect(buttonElement).toBeNull();
  });
});
