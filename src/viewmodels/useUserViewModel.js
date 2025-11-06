// src/viewmodels/useUserViewModel.js
import { useState, useEffect } from 'react';

// Simulación de datos de usuarios
const mockUsers = [
    { id: 1, rut: '11.111.111-1', nombre: 'Juan', apellidos: 'Pérez', correo: 'juan.perez@ejemplo.cl', password: 'Santiago123!', rol: 'admin', region: 'Metropolitana', comuna: 'Santiago', direccion: 'Calle Falsa 123' },
    { id: 2, rut: '12.222.222-2', nombre: 'Ana', apellidos: 'Gómez', correo: 'ana.gomez@ejemplo.cl', password: 'Chile2024!', rol: 'client', region: 'Valparaíso', comuna: 'Viña del Mar', direccion: 'Av. Siempre Viva 456' },
    { id: 3, rut: '13.333.333-3', nombre: 'Felipe', apellidos: 'Rojas', correo: 'felipe.rojas@ejemplo.cl', password: 'F4c1lContr4', rol: 'client', region: 'Biobío', comuna: 'Concepción', direccion: 'Calle Larga 12' },
    { id: 4, rut: '14.444.444-4', nombre: 'María', apellidos: 'Llanos', correo: 'maria.llanos@ejemplo.cl', password: 'HolaMundo1', rol: 'client', region: 'Araucanía', comuna: 'Temuco', direccion: 'Pasaje Los Pinos 8' },
    { id: 5, rut: '15.555.555-5', nombre: 'José', apellidos: 'Muñoz', correo: 'jose.munoz@ejemplo.cl', password: 'Admin!234', rol: 'admin', region: 'Metropolitana', comuna: 'Las Condes', direccion: 'Av. Apoquindo 1000' },
    { id: 6, rut: '16.666.666-6', nombre: 'Camila', apellidos: 'Fuentes', correo: 'camila.fuentes@ejemplo.cl', password: 'cliente2024', rol: 'client', region: 'O’Higgins', comuna: 'Rancagua', direccion: 'Calle Nueva 45' },
    { id: 7, rut: '17.777.777-7', nombre: 'Nicolás', apellidos: 'Vargas', correo: 'nicolas.vargas@ejemplo.cl', password: 'P4ssw0rd!', rol: 'client', region: 'Magallanes', comuna: 'Punta Arenas', direccion: 'Bulevar del Mar 7' },
    { id: 8, rut: '18.888.888-8', nombre: 'Daniela', apellidos: 'Castro', correo: 'daniela.castro@ejemplo.cl', password: 'Verano2025$', rol: 'client', region: 'Coquimbo', comuna: 'La Serena', direccion: 'Calle del Sol 22' },
    { id: 9, rut: '19.999.999-9', nombre: 'Sebastián', apellidos: 'Ortiz', correo: 'sebastian.ortiz@ejemplo.cl', password: 'RootAccess!9', rol: 'admin', region: 'Antofagasta', comuna: 'Antofagasta', direccion: 'Av. Argentina 300' },
    { id: 10, rut: '20.123.456-0', nombre: 'Catalina', apellidos: 'Rivas', correo: 'catalina.rivas@ejemplo.cl', password: 'Cata2024#', rol: 'client', region: 'Los Lagos', comuna: 'Puerto Montt', direccion: 'Llano Grande 55' },
    { id: 11, rut: '21.234.567-1', nombre: 'Francisco', apellidos: 'Soto', correo: 'francisco.soto@ejemplo.cl', password: 'ChileRocks99', rol: 'client', region: 'Maule', comuna: 'Talca', direccion: 'Carmen 101' },
    { id: 12, rut: '22.345.678-2', nombre: 'Lorena', apellidos: 'Ibarra', correo: 'lorena.ibarra@ejemplo.cl', password: 'L0r3na!23', rol: 'client', region: 'Ñuble', comuna: 'Chillán', direccion: 'San Martín 3' },
    { id: 13, rut: '23.456.789-3', nombre: 'Rodrigo', apellidos: 'Vergara', correo: 'rodrigo.vergara@ejemplo.cl', password: 'Adm1nChile$', rol: 'admin', region: 'Los Ríos', comuna: 'Valdivia', direccion: 'Río Calle Calle 14' },
    { id: 14, rut: '24.567.890-4', nombre: 'Paola', apellidos: 'Miranda', correo: 'paola.miranda@ejemplo.cl', password: 'Pa0laSecure', rol: 'client', region: 'Tarapacá', comuna: 'Iquique', direccion: 'Cumming 77' },
    { id: 15, rut: '25.678.901-5', nombre: 'Gonzalo', apellidos: 'Arias', correo: 'gonzalo.arias@ejemplo.cl', password: 'Gonza!2024', rol: 'client', region: 'Aysén', comuna: 'Cochrane', direccion: 'Isla Grande 2' },
    { id: 16, rut: '26.789.012-6', nombre: 'Andrea', apellidos: 'Poblete', correo: 'andrea.poblete@ejemplo.cl', password: 'AndiPass#1', rol: 'client', region: 'Arica y Parinacota', comuna: 'Arica', direccion: ' Bolivia 210' },
    { id: 17, rut: '27.890.123-7', nombre: 'Matías', apellidos: 'Cruz', correo: 'matias.cruz@ejemplo.cl', password: 'SysAdmin2024!', rol: 'admin', region: 'Metropolitana', comuna: 'Providencia', direccion: 'Providencia 450' },
    { id: 18, rut: '28.901.234-8', nombre: 'Valentina', apellidos: 'Ruiz', correo: 'valentina.ruiz@ejemplo.cl', password: 'Valen!88', rol: 'client', region: 'Los Lagos', comuna: 'Chiloé', direccion: 'Isla 12' },
    { id: 19, rut: '29.012.345-9', nombre: 'Jorge', apellidos: 'Molina', correo: 'jorge.molina@ejemplo.cl', password: 'J0rgePass', rol: 'client', region: 'Biobío', comuna: 'Talcahuano', direccion: 'Puerto 5' },
    { id: 20, rut: '30.123.456-1', nombre: 'Verónica', apellidos: 'Herrera', correo: 'veronica.herrera@ejemplo.cl', password: 'Vero2024*', rol: 'client', region: 'Valparaíso', comuna: 'Quilpué', direccion: 'Los Nogales 9' },
];

const useUserViewModel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  // TODO: Implementar CRUD para usuarios (addUser, deleteUser...)
  const deleteUser = (id) => {
    setUsers(current => current.filter(u => u.id !== id));
  };

  return { users, deleteUser };
};

export default useUserViewModel;