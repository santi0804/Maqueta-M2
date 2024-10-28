import React from 'react';
import { Link } from 'react-router-dom';
import './PanelControl.css';

function PanelControl() {
    return (
        <div className="panel-control">
            <div className="banner">
                <h1>BIOGRAFIAS</h1>
                <Link to="/login" className="logout-button">Cerrar Sesión</Link>
            </div>

            <p className='parrafo'>INFORMACIÓN CLASIFICADA</p>
            <div className="content-sections">
                {/* Aquí puedes cambiar las URL por imágenes reales si lo deseas */}
                {[
                    { id: 1, bio: "Biografia de 1", img: "https://via.placeholder.com/150" },
                    { id: 2, bio: "Biografia de 2", img: "https://via.placeholder.com/150" },
                    { id: 3, bio: "Biografia de 3", img: "https://via.placeholder.com/150" },
                    { id: 4, bio: "Biografia de 4", img: "https://via.placeholder.com/150" },
                ].map((section) => (
                    <div className="section" key={section.id}>
                        <img src={section.img} alt={`Imagen ${section.id}`} className="section-image" />
                        <p className="section-bio">{section.bio}</p>
                        <div className='button-group'>
                            <button className='opcion'>One</button>
                            <button className='opcion'>Two</button>
                            <button className='opcion'>Three</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PanelControl;
