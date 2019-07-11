import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <Link style={linkStyle} to="/">Dashboard</Link> | <Link style={linkStyle} to="/securities">Securities</Link>
        </div>
    )
}

const linkStyle = {
    color: '#333',
    textDecoration: 'none'
}

export default Dashboard;