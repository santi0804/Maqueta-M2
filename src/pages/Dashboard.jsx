import React from 'react';
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Header from '../componentes/Header';
import FormularioRegistro from './FomularioRegistro';

const Dashboard = () => {



    return (
        <main>
            <Header />
            <br />
            <FormularioRegistro/>
            <nav className="dashboard-nav">
                <Link to="/login" className="nav-link"></Link>
                <Link to="/regitro" className="nav-link"></Link>
            </nav>
        </main>

    );
};

export default Dashboard;
