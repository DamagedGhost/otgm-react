import React, { useState } from 'react';
import Button from '../atoms/Button';
import FormGrupo from '../molecules/FormGrupo';

function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    comentario: ''
  });

  const [errors, setErrors] = useState({});

  // Validaciones equivalentes a tu contacto.js
  const validarNombre = (nombre) => {
    if (!nombre.trim()) return 'El nombre no puede estar vacío.';
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,100}$/.test(nombre))
      return 'Máx 100 caracteres, solo letras, espacios y acentos.';
    return '';
  };

  const validarCorreo = (correo) => {
    if (correo.length > 100) return 'El correo no puede superar los 100 caracteres.';
    if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(correo))
      return 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.';
    return '';
  };

  const validarComentario = (comentario) => {
    if (!comentario.trim()) return 'El comentario no puede estar vacío.';
    if (comentario.length > 500) return 'Máx 500 caracteres.';
    return '';
  };

  const validarFormulario = () => {
    const nuevosErrores = {
      nombre: validarNombre(formData.nombre),
      correo: validarCorreo(formData.correo),
      comentario: validarComentario(formData.comentario),
    };
    setErrors(nuevosErrores);
    return !Object.values(nuevosErrores).some((err) => err !== '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert('Formulario enviado correctamente.');
      console.log('Datos enviados:', formData);
      // Aquí podrías enviar los datos a un backend o API
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
      <FormGrupo
        label="Nombre completo"
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        error={errors.nombre}
      />
      <FormGrupo
        label="Correo electrónico"
        type="email"
        name="correo"
        placeholder="correo@ejemplo.com"
        value={formData.correo}
        onChange={handleChange}
        required
        error={errors.correo}
      />
      <FormGrupo
        label="Teléfono"
        type="tel"
        name="telefono"
        placeholder="+56 9 1234 5678"
        value={formData.telefono}
        onChange={handleChange}
      />
      <FormGrupo
        label="Comentario"
        name="comentario"
        placeholder="Escribe tu mensaje..."
        value={formData.comentario}
        onChange={handleChange}
        required
        error={errors.comentario}
        as="textarea"
      />
      <Button label="Enviar mensaje" variant="primary" type="submit" fullWidth/>
    </form>
  );
}

export default ContactoForm;
