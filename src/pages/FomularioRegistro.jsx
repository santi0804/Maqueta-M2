import React from "react";
import './Login.css'
import './FormularioRegistro.css'
import Header from "../componentes/Header";


const FormularioRegistro = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registrar usuario');
    };

    return (
        <div>
            <Header/>
        <form className="form1">
            <section className="form-container">
            <div className="input-group">
                    <label htmlFor="nombre">Usuario</label>
                    <input id="nombre" type="text" placeholder="Ingresa tu usuario" />
                </div>

                <div className="input-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" placeholder="Ingresa tu nombre" />
                </div>

                <div className="input-group">
                    <label htmlFor="nombre">Telefono</label>
                    <input id="nombre" type="text" placeholder="Ingresa tu Telefono" />
                </div>

                <div className="input-group">
                    <label htmlFor="correo">Correo</label>
                    <input id="correo" type="email" placeholder="Ingresa tu correo" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="password" placeholder="Crea una contraseña" />
                </div>

                <button onClick={handleRegister} className="button" type="button">Registrar</button>
            </section>
        </form>
        </div>
        );
};

export default FormularioRegistro;