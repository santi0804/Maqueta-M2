import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './Dashboard.css'
import Header from '../componentes/Header';

const Dashboard = () => {



    return (
        <main>
            <Header />
            <nav className="dashboard-nav">
                <Link to="/panel-control" className="nav-link">Panel de Control</Link>
                <Link to="/registrar" className="nav-link">Registro</Link>
                <Link to="/login" className="nav-link">Cerrar sesión</Link>
            </nav>

            <div className='dashboard-content'>
                <Outlet />
            </div>
        </main>

    );
};

export default Dashboard;
