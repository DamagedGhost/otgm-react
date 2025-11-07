import { useState } from 'react';
// import { useState, useEffect } from 'react';

const mockCategorias = [
    { id: 1, nombre: 'Guitarras' },
    { id: 2, nombre: 'Teclados' },
    { id: 3, nombre: 'Baterías' },
    { id: 4, nombre: 'Otros' }
];
const DB_NAME = 'categorias';

const loadCategorias = () => {
  try {
    const data = localStorage.getItem(DB_NAME);
    return data ? JSON.parse(data) : mockCategorias;
  } catch (error) {
    return mockCategorias;
  }
};

const useCategoriaViewModel = () => {
  const [categorias, setCategorias] = useState(() => loadCategorias());

  const _saveAndSet = (newCats) => {
    localStorage.setItem(DB_NAME, JSON.stringify(newCats));
    setCategorias(newCats);
  };

  const addCategoria = (nombre) => {
    const newCat = { id: Date.now(), nombre };
    _saveAndSet([...categorias, newCat]);
  };

  const deleteCategoria = (id) => {
    _saveAndSet(categorias.filter(c => c.id !== id));
  };

  return { categorias, addCategoria, deleteCategoria };
};

export default useCategoriaViewModel;