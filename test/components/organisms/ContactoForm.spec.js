//TEST DE EVENTOS DE IMPUT DEL USUARIO EN FORMULARIO DE CONTACTO

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// Ajusta la ruta a tu formulario de contacto
import ContactoForm from '../../../src/components/organisms/ContactoForm';

describe('Componente ContactoForm (Prueba de Evento Input)', () => {

  it('debería actualizar el valor del input de nombre al escribir', () => {
    render(<ContactoForm />);
    
    //Buscamos el input. La mejor forma es por su <label>
    const inputNombre = screen.getByLabelText(/Nombre completo/i);

    //Verificamos que su valor inicial está vacío
    expect(inputNombre.value).toBe('');

    //Simulamos el evento 'change' (escribir en el input)
    fireEvent.change(inputNombre, {
      target: { value: 'Juan Perez' } 
    });

    //Verificamos que el 'value' del input ahora es lo que escribimos
    expect(inputNombre.value).toBe('Juan Perez');
  });
});
