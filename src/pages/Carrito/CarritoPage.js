import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/Button';

const Carrito = () => {
    return (
        <MainTemplate>

            {/* Carrito */}     
            <main className="container my-5">
            <h2 className="mb-4">Mi carrito de compras</h2>
            <div className="row">
                {/* Lista de productos */}
                <div className="col-md-8">
                <div id="cart-items-list">
                </div>
                </div>
                {/* Resumen */}
                <div className="col-md-4">
                <div className="card p-3 shadow-sm">
                    <h5 className="mb-3">TOTAL:</h5>
                    <h3 id="cart-total" className="text-success">$0</h3>
                    {/* Cupon */}
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Ingrese el cupón de descuento" />
                    <button className="btn btn-outline-secondary">Aplicar</button>
                    </div>
                    <Button
                    label="Pagar"
                    variant="outline-primary"
                    onClick={() => {}}
                  />
                </div>
                </div>
            </div>
            </main>


        </MainTemplate>
            
    
    );
};

export default Carrito;