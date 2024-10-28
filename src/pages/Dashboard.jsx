import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {



    return (
        <main>
            <div className='dashboard-content'>
                <Outlet />
            </div>
        </main>

    );
};

export default Dashboard;
