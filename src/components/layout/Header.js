import React from 'react';

function Header() {
	return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Real-Time Dashboard</a>
        </nav>
	)
}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'centre',
    padding: '10px',
    fontSize: '1rem'
}

const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}

export default Header;