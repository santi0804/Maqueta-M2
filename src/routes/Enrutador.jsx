
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../componentes/Header"; // Asegúrate de que la ruta sea correcta
import Login from "../pages/Login";
import FormularioRegistro from "../pages/FomularioRegistro";
import Dashboard from "../pages/Dashboard";
import PanelControl from "../pages/PanelControl";

const Enrutador = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />}>
                    <Route path="panel-control" element={<PanelControl />} />
                    <Route path="registrar" element={<FormularioRegistro />} />  
                </Route>
            </Routes>
        </Router>
    );
};

export default Enrutador;
