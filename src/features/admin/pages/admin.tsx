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
            <div className="overview">
                <div className="title">
                    <i className="uil uil-tachometer-fast-alt"></i>
                    <span className="text">Dashboard</span>
                </div>

                <div className="boxes">
                    <div className="box box1">
                        <i className="uil uil-user"></i>
                        <span className="text">Users</span>
                        <span></span>
                        <span id="user"></span>
                    </div>
                    <div className="box box2">
                        <i className="uil uil-clipboard-notes"></i>
                        <span className="text">Projects</span>
                        <span></span>
                        <span id="order"></span>
                    </div>
                    <div className="box box3">
                        <i className="uil uil-bug"></i>
                        <span className="text">Bugs</span>
                        <span></span>
                        <span id="room"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Admin;