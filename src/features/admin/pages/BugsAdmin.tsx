import React from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HomeProps {
}

function Admin(props: HomeProps) {
    return (
        <>
             <nav>
        <div className="logo-name">
            <div className="logo-image">               
            </div>
            <span className="logo_name">FIB</span>
        </div>

        <div className="menu-items">
            <ul className="nav-links">
                <li><a href="#">
                    <i className="uil uil-estate"></i>
                    <span className="link-name">Dashboard</span>
                </a></li>
                <li><a href="#">
                    <i className="uil uil-user"></i>
                    <span className="link-name">Users</span>      
                </a></li>
                <li><a href="#">
                    <i className="uil uil-clipboard-notes"></i>
                    <span className="link-name">Projects</span>
                </a></li>
                <li><a href="#">
                    <i className="uil uil-bug"></i>
                    <span className="link-name">Bugs</span>                 
                </a></li>
                <li><a href="#">
                    <i className="uil uil-setting"></i>
                    <span className="link-name">Setting</span>
                </a></li>
             </ul> 
                      
        </div>
    </nav>

    <section className="dashboard">
        <div className="top">
            <i className="uil uil-bars sidebar-toggle"></i>

            <div className="search-box">
                <i className="uil uil-search"></i>
                <input type="text" placeholder="Search here..." />
            </div>
            
        </div>

        <div className="dash-content">
           
        </div>
    </section>
        </>
    );
}

export default Admin;