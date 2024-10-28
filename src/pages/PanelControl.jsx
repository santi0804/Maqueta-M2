import React from 'react';
import { Link } from 'react-router-dom'
import './PanelControl.css'


function PanelControl() {


    return (

        <div className="panel-control">
            <div className="banner">
                <h1>Panel de Control</h1>
                <Link to="/login" className="logout-button">Cerrar Sesión</Link>
            </div>

            {/* Sección de vistas horizontales */}
            <div className="content-sections">
                {[1, 2, 3, 4].map((section) => (
                    <div className="section" key={section}>
                        <img src={`https://via.placeholder.com/150`} alt={`Imagen ${section}`} className="section-image" />
                        <p className="section-bio">Información de:{section}.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PanelControl;