//TEST DE ESTADO Y EVENTO SIMULANDO CLICK EN CONTADOR

import React from 'react';
// ¡Importamos fireEvent para simular eventos!
import { render, screen, fireEvent } from '@testing-library/react';
// Ajusta la ruta al componente que acabamos de crear
import Counter from '../../../src/components/molecules/Counter';

describe('Componente Counter (Prueba de Estado y Evento Click)', () => {

  it('debería iniciar en 0 e incrementar el contador al hacer clic', () => {
    render(<Counter />);
    
    // 1. Verificamos el estado inicial (el texto es "Contador: 0")
    expect(screen.getByText('Contador: 0')).toBeTruthy();

    // 2. Buscamos el botón
    const incrementButton = screen.getByRole('button', { name: /Incrementar/i });

    // 3. Simulamos el evento de 'click' en el botón
    fireEvent.click(incrementButton);

    // 4. Verificamos que el estado cambió (el texto ahora es "Contador: 1")
    expect(screen.getByText('Contador: 1')).toBeTruthy();

    // 5. (Opcional) Verificamos que el texto "Contador: 0" ya no existe
    expect(screen.queryByText('Contador: 0')).toBeNull();
  });
});

