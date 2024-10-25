import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const urlUserMaqueta = "http://localhost:3001/userMaqueta";

const Login = () => {
    const [usuario, setUsuario] = useState("");      // Estado para el nombre de usuario
    const [contraseña, setContraseña] = useState("");      // Estado para la contraseña
    const [users, setUsers] = useState([]);      // Estado para la lista de usuarios desde la API

    let direccion = useNavigate()

    
    const getUsuarios = () => {     // Función para obtener la lista de usuarios
        fetch(urlUserMaqueta)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error al obtener usuarios:", error));
    };

    
    useEffect(() => {    // useEffect para obtener usuarios al cargar el componente
        getUsuarios();

    }, []);
    console.log(users)

    
    function signIn() {    // Función para iniciar sesión

        if (findUser()) {
            console.log("Inicio de sesión exitoso");
            direccion("/");  // Redirige al PanelControl

        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    const findUser = () => {
        let auth = users.some((item) => item.user === usuario && item.password === contraseña); // Función para verificar si el usuario existe
        return auth
    };

    return (
        <form className="form" action="">
            <section className="form-container">

                <div className="input-group">
                    <label htmlFor="username">Usuario</label>
                    <input id="username" type="text" placeholder="Ingresa tu usuario" value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="password" placeholder="Ingresa tu contraseña" value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}/>
                </div>

                <button onClick={signIn} className="button" type="button">Iniciar sesión</button>
            </section>
        </form>
    );
};

export default Login;
