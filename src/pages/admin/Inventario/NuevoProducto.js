import AdminTemplate from "../../../templates/AdminTemplate"
import React from "react";

const NuevoProducto = () => {
    return (
    <AdminTemplate>
        {/*TODO: Formulario de registro (extraido de otro archivo, tarea de formulario) */}
        <section className="form-section container my-3 p-4 border rounded-3 bg-white">
        <h1>Nuevo Producto</h1>
        <form id="registrationForm" onsubmit="validarFormulario(event)">
            {/* Código Producto */}
            <div className="Codigo-Producto">
            <label htmlFor="codIntput">Código Producto *</label>
            <input type="text" id="codIntput" oninput="validarCodigoProducto()" required className="form-control" />
            <span id="codIntputFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            {/* Nombre Producto */}
            <div className="Nombre-producto">
            <label htmlFor="nombreProductoInput">Nombre Producto *</label>
            <input type="text" id="nombreProductoInput" oninput="validarNombreProducto()" required className="form-control" />
            <span id="nombreProductoFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            {/* Descripción */}
            <div className="descripcion">
            <label htmlFor="descripcionInput">Descripción</label>
            <input type="text" id="descripcionInput" oninput="validarDescripcionProducto()" required className="form-control" />
            <span id="descripcionFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            {/* Precio */}
            <div className="precio">
            <label htmlFor="precioInput">Precio *</label>
            <input type="text" id="precioInput" oninput="validarPrecioProducto()" required className="form-control" />
            <span id="precioFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            {/* Stock */}
            <div>
            <label htmlFor="stockInput">Stock *</label>
            <input type="number" id="stockInput" oninput="validarStockProducto()" required className="form-control" />
            <span id="stockFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            {/* Stock Crítico */}
            <div>
            <label htmlFor="stockCriticoInput">Stock Crítico</label>
            <input type="number" id="stockCriticoInput" oninput="validarStockCriticoProducto()" className="form-control" />
            <span id="stockCriticoFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            {/* Categoria (lado a lado) */}
            <div className="row g-3 my-3">
            <div className="col-md-6">
                <label htmlFor="regionSelect" className="form-label">Categoría *</label>
                <select id="regionSelect" className="form-select" required onchange="validarCategoriaProducto()">
                <option value disabled selected>Seleccione categoría</option>
                <option value="cuerda">Cuerda</option>
                <option value="percusion">Percusión</option>
                <option value="electronico">Electrónico</option>
                </select>
                <span id="categoriaFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            <div className="col-md-6">
                <label htmlFor="imagenInput" className="form-label">Imagen</label>
                <input type="file" id="imagenInput" className="form-control" accept="image/*" onchange="validarImagenProducto()" />
                <span id="imagenFeedback" className="invalid-feedback" style={{color: 'red'}} />
            </div>
            </div>
            {/* Botón */}
            <div>
            <button type="submit" id="submitBtn" className="btn btn-primary mt-3" onclick="validarFormulario(event)">
                Agregar Producto
            </button>
            </div>
        </form>
        </section>
    </AdminTemplate>
    );
}

export default NuevoProducto;