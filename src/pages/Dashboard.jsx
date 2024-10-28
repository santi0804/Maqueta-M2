import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {



    return (
        <main>
            <nav className="dashboard-nav">
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
