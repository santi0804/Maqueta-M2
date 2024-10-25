
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../componentes/Header"; // Asegúrate de que la ruta sea correcta
import Login from "../pages/Login";
import FormularioRegistro from "../pages/FomularioRegistro";
import Dashboard from "../pages/Dashboard";

const Enrutador = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />}>
                    <Route path="registrar" element={<FormularioRegistro />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Enrutador;
