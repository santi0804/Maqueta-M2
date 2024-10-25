import React from "react";
/* import './Login.css' */

const Login = () => {
    const signIn = (e) => {
        e.preventDefault();
        console.log('Iniciar sesión')  // Logica inicio de sessión
    };

    return (
        <form className="form">
            <section className="form-container">
                <div className="input-group">
                    <label htmlFor="usuario">Usuario</label>
                    <input id="usuario" type="text" placeholder="Ingresa tu usuario" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="password" placeholder="Ingresa tu contraseña" />
                </div>
                <button onClick={signIn} className="button" type="button">Iniciar sesión</button>
            </section>
        </form>
    );
};
export default Login;