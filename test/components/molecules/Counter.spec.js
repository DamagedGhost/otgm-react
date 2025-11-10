//TEST DE ESTADO Y EVENTO SIMULANDO CLICK EN CONTADOR

import React from 'react';
// ¡Importamos fireEvent para simular eventos!
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../../src/components/molecules/Counter';

describe('Componente Counter (Prueba de Estado y Evento Click)', () => {

  it('debería iniciar en 0 e incrementar el contador al hacer clic', () => {
    render(<Counter />);
    
    //Verificamos el estado inicial (el texto es "Contador: 0")
    expect(screen.getByText('Contador: 0')).toBeTruthy();

    //Buscamos el botón
    const incrementButton = screen.getByRole('button', { name: /Incrementar/i });

    //Simulamos el evento de 'click' en el botón
    fireEvent.click(incrementButton);

    // Verificamos que el estado cambió (el texto ahora es "Contador: 1")
    expect(screen.getByText('Contador: 1')).toBeTruthy();

    // (Opcional) Verificamos que el texto "Contador: 0" ya no existe
    expect(screen.queryByText('Contador: 0')).toBeNull();
  });
});

