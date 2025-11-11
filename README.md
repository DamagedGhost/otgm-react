# On The Go Music (React E-Commerce)

Una plataforma de e-commerce responsive para la tienda de instrumentos musicales "On The Go Music", construida con React, Bootstrap y una arquitectura de persistencia simulada en el frontend.

## 1. Contexto del Proyecto

Este proyecto fue desarrollado como parte de la asignatura Desarrollo FullStack II (DSY1104). Representa una **migración estratégica** desde un sitio HTML/CSS/JS estático a una **Single Page Application (SPA)** moderna, interactiva y escalable.

El objetivo principal es establecer una base sólida para el e-commerce. Para cumplir con los requisitos de la evaluación, se implementó un **frontend completamente funcional** que maneja su propia lógica de negocio y persistencia de datos de forma simulada (`localStorage`), preparando el terreno para una futura integración con un backend dedicado.

## 🚀 2. Características Principales

El proyecto se divide en dos grandes áreas: la tienda pública para clientes y un panel de administración completo.

### Tienda (Cliente)

* **🛒 Carrito de Compras:** Sistema completo para agregar productos, ver el resumen y persistir la compra en `localStorage`.
* **👤 Autenticación de Clientes:** Flujo completo de Registro, Login y Sesión Persistente (`localStorage`).
* **💳 Flujo de Compra (Checkout):** Formulario de compra que se **autocompleta automáticamente** con los datos del usuario si este ha iniciado sesión.
* **👁️ Vistas de Catálogo:** Navegación completa por Productos, Detalle de Producto y página de Categorías.
* **📱 Diseño 100% Responsivo:** Tanto la tienda pública (con menú *collapse*) como el panel de administración (con menú *offcanvas*) se adaptan a dispositivos móviles usando Bootstrap 5.
* **📄 Páginas Estáticas:** Secciones informativas como "Nosotros", "Blogs" y un formulario de "Contacto" con validación de estado.

### Panel de Administración

* **🔐 Rutas Protegidas:** Todo el panel `/Admin` es inaccesible a menos que se inicie sesión como "admin".
* **📊 Dashboard Interactivo:** Página principal de admin con tarjetas de resumen (Total de Usuarios, Productos, Órdenes) y **gráficos dinámicos** que leen datos en vivo de los ViewModels.
* **📦 CRUD de Productos:** Gestión completa (Crear, Leer, Actualizar, Eliminar) para productos, con persistencia en `localStorage`.
* **👥 CRUD de Usuarios:** Gestión completa (Crear, Leer, Actualizar, Eliminar) para usuarios (clientes y admins).
* **🏷️ CRUD de Categorías:** Gestión completa (Crear, Leer, Eliminar) para las categorías de productos.
* **📈 Reportes y Listados:** Vistas funcionales para `Productos Críticos`, `Reporte de Inventario`, `Reporte General`, `Mostrar Boletas` e `Historial de Compras` por usuario.

---

## 🛠️ 3. Stack Tecnológico y Arquitectura

La arquitectura del proyecto es uno de sus pilares. Se diseñó para ser mantenible, escalable y fácil de testear.

### Stack Principal

* **React (v18+)**
* **React Router (v6)** para la navegación (SPA).
* **Bootstrap 5 (CSS + JS)** para un diseño responsivo (`navbar-toggler`, `offcanvas`, etc.).
* **@mui/x-charts** para la visualización de datos en el Dashboard.
* **Jest & React Testing Library** para Pruebas Unitarias.

### Arquitectura de Software

El proyecto sigue patrones modernos de desarrollo de frontend:

1.  **Patrón ViewModel (MVVM simulado):** Se centralizó toda la lógica de negocio (el estado y las funciones que lo modifican) fuera de las vistas, en **React Hooks** personalizados que actúan como *ViewModels*.
    * `useProductsViewModel.js`: Maneja el estado y CRUD de todos los productos.
    * `useUserViewModel.js`: Maneja el estado y CRUD de todos los usuarios.
    * `useCategoriaViewModel.js`: Maneja el estado y CRUD de las categorías.
2.  **Persistencia Simulada (Frontend-as-Backend):** Cumpliendo con los requisitos, no se utilizó un backend. En su lugar, los *ViewModels* utilizan el **`localStorage` del navegador** como una base de datos simulada. Esto permite una persistencia de datos completa (el CRUD se guarda al recargar la página).
3.  **Gestión de Estado Global (Context API):** El estado de la sesión de autenticación (quién está logueado) se maneja globalmente a través de `AuthContext.js`, permitiendo que cualquier componente sepa si el usuario está logueado y quién es.
4.  **Atomic Design:** La estructura de componentes se basa en Atomic Design para maximizar la reutilización.
    * `atoms`: Componentes puros como `Button.js` e `Input.js`.
    * `molecules`: Combinaciones de átomos como `ProductCard.js` y `RegLinks.js`.
    * `organisms`: Secciones complejas como `NavBar.js` y `ProductGrid.js`.

---

## 🏁 4. Instalación y Ejecución

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/DamagedGhost/otgm-react
    ```
2.  Navegar a la carpeta del proyecto:
    ```bash
    cd otgm-react
    ```
3.  Instalar las dependencias (incluyendo las de los gráficos):
    ```bash
    npm install
    npm install @mui/material @emotion/react @emotion/styled @mui/x-charts
    ```
4.  Ejecutar el proyecto:
    ```bash
    npm start
    ```
    La aplicación se abrirá en `http://localhost:3000`.

### Credenciales de Prueba

* **Administrador:**
    * **Usuario:** `admin@mail.com`
    * **Contraseña:** `123`
* **Cliente (Ejemplo):**
    * **Usuario:** `cliente@mail.com`
    * **Contraseña:** `123`
* O puedes registrar un nuevo cliente en la ruta `/registro`.

---

## 🧪 5. Pruebas Unitarias

El proyecto incluye una suite de pruebas (ubicada en la carpeta `/test`) que valida el correcto funcionamiento de los componentes, como lo exige la pauta de evaluación.

Las pruebas cubren:
* **Renderizado de Componentes:** (e.g., `App.spec.js`)
* **Manejo de `props`:** Se prueba que un componente renderice el texto correcto pasado por `props` (e.g., `Button.spec.js`).
* **Renderizado Condicional:** Se prueba que un componente muestre una UI (ej. "Bienvenido") si el usuario está logueado, y otra UI (ej. "Iniciar Sesión") si no lo está (e.g., `RegLinks.spec.js`).
* **Simulación de Eventos (Estado):** Se prueba que el estado de un formulario se actualiza correctamente cuando el usuario simula escribir en un `input` (e.g., `ContactoForm.spec.js`).

Para ejecutar las pruebas:
```bash
npx test
